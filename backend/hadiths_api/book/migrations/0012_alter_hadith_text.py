# Generated by Django 4.1.4 on 2023-01-02 03:04

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("book", "0011_alter_book_additional_notes"),
    ]

    operations = [
        migrations.AlterField(
            model_name="hadith",
            name="text",
            field=ckeditor.fields.RichTextField(),
        ),
    ]