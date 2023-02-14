from rest_framework import serializers
from .models import Book, Chapter, Hadith, Vocabulary


class HadithSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hadith
        fields = ["id", "sequence", "text", "grade", "audio"]

class ChapterSerializer(serializers.ModelSerializer):
    hadith_set = serializers.SerializerMethodField()
    class Meta:
        model = Chapter
        fields = ["sequence", "title", "hadith_set"]  
    def get_hadith_set(self, instance):
        hadiths = instance.hadith_set.all().order_by('sequence')
        return HadithSerializer(hadiths, many=True).data
    

class BookSerializerList(serializers.ModelSerializer):
    
    class Meta:
        model = Book
        fields = ["id","title", "author", "cover"]
        

class BookSerializerDetail(serializers.ModelSerializer):
    
    chapter_set = ChapterSerializer(many=True)
    class Meta:
        model = Book
        fields = ["id", "title", "about_book", "additional_notes", "author",  "chapter_set"]


class VocabularySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vocabulary
        fields = ['term', 'des']
