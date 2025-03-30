from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
from collections import Counter
import json
import os

@csrf_exempt
def extract_colors(request):
    if request.method == 'POST' and request.FILES.get('image'):
        image_file = request.FILES['image']
        image = Image.open(image_file).convert("RGB")
        pixels = list(image.getdata())

        most_common_colors = [color[0] for color in Counter(pixels).most_common(5)]

        return JsonResponse({'colors': most_common_colors})

    return JsonResponse({'error': 'No image uploaded'}, status=400)

