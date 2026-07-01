from django.http import HttpResponse

def home(request):
    return HttpResponse("Restaurant Ordering System - Group 09")