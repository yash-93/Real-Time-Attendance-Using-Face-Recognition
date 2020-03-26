from django.contrib import admin
from.models import StudentData


class StudentDataAdmin(admin.ModelAdmin):
    list_display = ('name', 'arrival_time', 'departure_time', 'is_late', 'has_left_early')


admin.site.register(StudentData, StudentDataAdmin)

