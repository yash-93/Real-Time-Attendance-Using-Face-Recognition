from django.db import models


class StudentData(models.Model):
    name = models.CharField(max_length=30)
    arrival_time = models.TimeField()
    departure_time = models.TimeField()
    is_late = models.BooleanField(default=False)
    has_left_early = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class DefaultersData(models.Model):
    name = models.CharField(max_length=30)
    arrival_time = models.TimeField()
    departure_time = models.TimeField()
    is_late = models.BooleanField(default=False)
    has_left_early = models.BooleanField(default=False)

    def __str__(self):
        return self.name
