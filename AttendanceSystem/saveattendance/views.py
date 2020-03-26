from django.shortcuts import render

from imutils.video import VideoStream
import face_recognition
from imutils import paths
import pickle
import time
import cv2
import numpy as np
import os

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import StudentDataSerializer
from .models import StudentData


@api_view(['GET'])
def processWebcam(request):
    if request.method == 'GET':
        imagePaths = list(paths.list_images('D:\Yashdeep\DeepLearningProjects\Real Time Attendance System Using Face Recognition\AttendanceSystem\static\dataset'))
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
        # queryset = StudentData.objects.all()
        # serializer = StudentDataSerializer(queryset, context={'request': request}, many=True)
    return Response({'data': knownNames})
