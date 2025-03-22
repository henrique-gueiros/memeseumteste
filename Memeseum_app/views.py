from django.shortcuts import render

def home(request):
    return render(request,'index.html')

def add(request):
    return render(request,'add.html')

def ver(request):
    return render(request,'ver.html')

def edit(request):
    return render(request,'edit.html')

def delete(request):
    return render(request,'delete.html')