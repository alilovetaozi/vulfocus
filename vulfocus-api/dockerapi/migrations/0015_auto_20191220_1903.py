# Generated by Django 2.2.5 on 2019-12-20 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dockerapi', '0014_auto_20191213_1513'),
    ]

    operations = [
        migrations.AddField(
            model_name='networkinfo',
            name='create_user',
            field=models.IntegerField(default=1, verbose_name='创建用户ID'),
        ),
        migrations.AlterField(
            model_name='timemoudel',
            name='time_id',
            field=models.CharField(default='cf637d0a-1b3f-4528-90ed-099b2936dfc8', max_length=255, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
