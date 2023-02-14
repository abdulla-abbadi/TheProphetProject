from django.urls import path
from django.views.generic import TemplateView
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('books', views.BookViewSet, basename='books')
router.register('vocabularies', views.VocabularyViewSet, basename='vocabularies')
urlpatterns = router.urls 