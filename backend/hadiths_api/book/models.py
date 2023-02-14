from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=225)
    author = models.CharField(max_length=225)
    about_book = RichTextField()
    additional_notes = RichTextField(default='', blank=True, null=True)
    cover = models.ImageField(upload_to="covers")

    def __str__(self) -> str:
        return self.title


class Chapter(models.Model):
    sequence = models.IntegerField(default=0)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    title = models.CharField(max_length=225)

    def __str__(self) -> str:
        return str(self.sequence)

class Hadith(models.Model):
    GRADE_SOUND = "S"
    GRADE_GOOD = "G"
    GRADE_WEAK = "W"
    GRADE_CHOICES = [
        (GRADE_SOUND, "Sound"),
        (GRADE_GOOD, "Good"),
        (GRADE_WEAK, "Weak")
    ] 
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    sequence = models.IntegerField(default=0)
    text =  models.TextField()
    audio = models.FileField(upload_to="sounds")
    grade = models.CharField(max_length=1, choices=GRADE_CHOICES, default=GRADE_SOUND)


# class VocablurayIndex(models.Model):
#     term = models.CharField(max_length=225)


#     def __str__(self) -> str:
#         return str(self.term)

class Vocabulary(models.Model):
    term = models.CharField(max_length=225)
    des = models.TextField(blank=True, null=True)