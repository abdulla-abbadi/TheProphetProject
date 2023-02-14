from django.contrib import admin
from django.utils.html import format_html
from .forms import BookAdminForm, ChapterAdminForm, HadithAdminForm, VocabularyAdminForm #, VocabularyIndexAdminForm
from .models import Book, Chapter, Hadith, Vocabulary#, VocablurayIndex
# Register your models here.



class ChapterInline(admin.TabularInline):
    model = Chapter
    extra = 0
    form = ChapterAdminForm
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ["title", "author", 'cover_image']
    inlines = [ChapterInline]
    form = BookAdminForm

    def cover_image(self, instance):
        if  instance.cover.name != '':
            return format_html(f'<img src="{instance.cover.url}" width=60 />')


class HadithInline(admin.StackedInline):
    model = Hadith
    extra = 0
    form = HadithAdminForm

@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    list_display = ["sequence","title", 'book']
    inlines = [HadithInline]
    form = ChapterAdminForm
    ordering = ['sequence', 'book']


@admin.register(Hadith)
class HadithAdmin(admin.ModelAdmin):
    list_display = ['chapter','sequence', 'text', 'grade', 'audio_player']
    ordering = ['chapter__sequence', 'sequence']
    form = HadithAdminForm

    def audio_player(self, instance):
        if  instance.audio.name != '':
            return format_html(f'<audio controls style="">\
                                    <source src="{instance.audio.url}" type="audio/mp3">\
                                    Your browser does not support the audio element.\
                                </audio>')


# class VocabularyAdmin(admin.TabularInline):
#     model = Vocabulary
#     extra = 0
#     form = VocabularyAdminForm
    
                                
# @admin.register(VocablurayIndex)
# class VocabularyIndexInline(admin.ModelAdmin):
#     list_display = ['term']
#     model = VocablurayIndex
#     form = VocabularyIndexAdminForm
#     inlines = [VocabularyAdmin]


@admin.register(Vocabulary)
class Vocabulary(admin.ModelAdmin):
    list_display = ['term']
    form = VocabularyAdminForm
