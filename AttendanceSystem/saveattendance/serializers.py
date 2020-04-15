from rest_framework import serializers
from .models import StudentData, DefaultersData


class StudentDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentData
        fields = '__all__'

class DefaultersDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefaultersData
        fields = '__all__'