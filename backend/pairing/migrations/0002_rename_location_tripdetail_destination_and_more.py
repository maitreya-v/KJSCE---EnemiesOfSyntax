# Generated by Django 4.1.7 on 2023-03-04 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pairing', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tripdetail',
            old_name='location',
            new_name='destination',
        ),
        migrations.AddField(
            model_name='tripdetail',
            name='origin_loc',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
