from django import forms 
from .models import Book, Chapter, Hadith, Vocabulary # VocablurayIndex, 


class BookAdminForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['title', 'author', 'about_book', 'additional_notes', 'cover']
        widgets = {
            'title': forms.TextInput(attrs={ 
                'dir': 'rtl', 'size': '60'
                }
            ),
            'author': forms.TextInput(attrs={ 
                'dir': 'rtl', 'size': '60'
                }
            ),
        }

class ChapterAdminForm(forms.ModelForm):
    class Meta:
        model = Chapter
        fields = [ 'book', 'sequence', 'title',]
        widgets = {
            'title': forms.TextInput(attrs={ 
                'dir': 'rtl', 'size': '60'
                }
            )
        }

class HadithAdminForm(forms.ModelForm):
    class Meta:
        model = Hadith
        fields = ['sequence', 'grade', 'audio', 'text', ]

        widgets = {
            'text': forms.Textarea(attrs={ 
                'dir': 'rtl', 'cols': '70'
                }
            )
        }


# class VocabularyIndexAdminForm(forms.ModelForm):

#     class Meta:
#         model = Vocabulary
#         fields = ['term']
#         widgets = {
#             'term': forms.TextInput(attrs={ 
#                 'dir': 'rtl', 'size': '60'
#                 }
#             )
#         }


class VocabularyAdminForm(forms.ModelForm):

    class Meta:
        model = Vocabulary
        fields = ['term', 'des']
        widgets = {
            'term': forms.TextInput(attrs={ 
                'dir': 'rtl', 'size': '60'
                }
            ),
            'des': forms.Textarea(attrs={ 
                'dir': 'rtl', 'cols': '60'
                }
            )
        }

