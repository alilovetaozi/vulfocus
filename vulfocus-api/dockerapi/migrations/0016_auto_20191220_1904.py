# Generated by Django 2.2.5 on 2019-12-20 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dockerapi', '0015_auto_20191220_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='networkinfo',
            name='create_user',
            field=models.IntegerField(verbose_name='创建用户ID'),
        ),
        migrations.AlterField(
            model_name='timemoudel',
            name='time_id',
            field=models.CharField(default='fb8a09b5-c9d7-4001-9574-baecc99d2a43', max_length=255, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
