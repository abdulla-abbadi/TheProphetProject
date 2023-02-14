from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import BookSerializerList, BookSerializerDetail , VocabularySerializer
from .models import Book, Vocabulary
# Create your views here.

class BookViewSet(ModelViewSet):
    queryset = Book.objects.prefetch_related("chapter_set").prefetch_related("chapter_set__hadith_set").all()
    http_method_names = ["get", "head", "options"]

    def get_serializer_class(self):
        if self.action == "list":
            return BookSerializerList
        if self.action == "retrieve":
            return BookSerializerDetail

class VocabularyViewSet(ModelViewSet):
    queryset = Vocabulary.objects.all()
    http_method_names = ["get", "head", "options"]
    serializer_class = VocabularySerializer
    