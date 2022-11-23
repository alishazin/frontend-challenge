from django.shortcuts import render

import json
# Create your views here.

def home_page(request):
    return render(request, 'home.html', {})

def destination_page(request):
    return render(request, 'destination.html', {})