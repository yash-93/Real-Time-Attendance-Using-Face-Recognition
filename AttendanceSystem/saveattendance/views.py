from django.shortcuts import render

from imutils.video import VideoStream
import face_recognition
from imutils import paths
import pickle
import time
import cv2
import numpy as np
import os
import imutils

from datetime import datetime

from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import StudentDataSerializer
from .models import StudentData

# @api_view(['GET'])
# def studentData(request):
#     if request.method == 'GET':
#         # studentData_instance = StudentData.objects.create(name='sandeep', departure_time=datetime.now())
#         queryset = StudentData.objects.all()
#         serializer = StudentDataSerializer(queryset, context={'request': request}, many=True)
#     return Response({'data': serializer.data})

class studentData(generics.ListCreateAPIView):
    queryset = StudentData.objects.all()
    serializer_class = StudentDataSerializer


@api_view(['GET'])
def processDataset(request):
    if request.method == 'GET':
        # imagePaths = list(paths.list_images('D:\Yashdeep\DeepLearningProjects\Real Time Attendance System Using Face Recognition\AttendanceSystem\dataset'))
        imagePaths = list(paths.list_images(os.path.join(os.getcwd(), 'dataset')))
        knownEncodings = []
        knownNames = []
        for i, imagePath in enumerate(imagePaths):
            name =imagePath.split(os.path.sep)[-2]
            image = cv2.imread(imagePath)
            rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            boxes = face_recognition.face_locations(rgb, model='cnn')
            encodings = face_recognition.face_encodings(rgb, boxes)
            for encoding in encodings:
                knownEncodings.append(encoding)
                knownNames.append(name)
        data = {"encodings": knownEncodings, "names": knownNames}
        f = open("encodings.pickle", "wb")
        f.write(pickle.dumps(data))
        f.close()
        # queryset = StudentData.objects.all()
        # serializer = StudentDataSerializer(queryset, context={'request': request}, many=True)
    return Response({'data': knownNames})


@api_view(['GET'])
def processWebcam(request):
    if request.method == 'GET':
        data = pickle.loads(open('encodings.pickle', "rb").read())
        res_names = []
        vs = VideoStream(0).start()
        while True:
            frame = vs.read()
            rgb = imutils.resize(frame, width=750)
            r = frame.shape[1] / float(rgb.shape[1])
            boxes = face_recognition.face_locations(rgb, model='cnn')
            encodings = face_recognition.face_encodings(rgb, boxes)
            names = []
            for encoding in encodings:
                matches = face_recognition.compare_faces(data["encodings"], encoding)
                name = "Unknown"

                face_distances = face_recognition.face_distance(data["encodings"], encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = data["names"][best_match_index]
                names.append(name)


            unique_names = np.unique(names)
            for tname in unique_names:
                if tname not in res_names:
                    res_names.append(tname)

            for ((top, right, bottom, left), name) in zip(boxes, names):
                top = int(top * r)
                right = int(right * r)
                bottom = int(bottom * r)
                left = int(left * r)
                cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
                y = top - 15 if top - 15 > 15 else top + 15
                cv2.putText(frame, name, (left, y), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2)

            cv2.imshow("Frame", frame)
            key = cv2.waitKey(1) & 0xFF
            if key == ord("q"):
                break
        cv2.destroyAllWindows()
        vs.stop()

        for name in res_names:
            StudentData.objects.create(name=name, departure_time=datetime.now())
        # queryset = StudentData.objects.all()
        # serializer = StudentDataSerializer(queryset, context={'request': request}, many=True)
    return Response({'data': res_names})

