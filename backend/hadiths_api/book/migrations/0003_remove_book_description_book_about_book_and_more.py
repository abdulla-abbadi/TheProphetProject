# Generated by Django 4.1.4 on 2022-12-31 03:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0002_chapter_sequence_hadith_sequence"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="book",
            name="description",
        ),
        migrations.AddField(
            model_name="book",
            name="about_book",
            field=models.TextField(default=""),
        ),
        migrations.AddField(
            model_name="book",
            name="additional_notes",
            field=models.TextField(default=""),
        ),
    ]
