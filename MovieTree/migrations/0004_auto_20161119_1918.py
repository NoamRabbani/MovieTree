# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-11-19 19:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('MovieTree', '0003_auto_20161119_1508'),
    ]

    operations = [
        migrations.RenameField(
            model_name='survey',
            old_name='answers_given',
            new_name='answer_given',
        ),
        migrations.RenameField(
            model_name='survey',
            old_name='questions_asked',
            new_name='question_asked',
        ),
    ]
