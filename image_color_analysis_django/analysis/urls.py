from django.urls import path
from .views import extract_colors

urlpatterns = [
    path('analysis/', extract_colors, name='extract_colors'),
]
