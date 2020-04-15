# Generated by Django 3.0.4 on 2020-04-07 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('saveattendance', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DefaultersData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('arrival_time', models.DateTimeField(auto_now_add=True)),
                ('departure_time', models.DateTimeField()),
                ('is_late', models.BooleanField(default=False)),
                ('has_left_early', models.BooleanField(default=False)),
            ],
        ),
    ]
