# Generated by Django 4.1.4 on 2023-01-02 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0008_alter_chapter_sequence"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="additional_notes",
            field=models.TextField(blank=True, default="", null=True),
        ),
    ]
