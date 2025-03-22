from django.shortcuts import render, redirect
from .models import Meme
from django.contrib import messages

def home(request):
    return render(request,'index.html')

def add(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        descricao = request.POST.get('descricao')
        ano = request.POST.get('ano')
        imagem = request.POST.get('imagem')

        Meme = Meme(
            nome = nome,
            descricao = descricao,
            ano = ano,
            imagem = imagem
        )

        Meme.save()
        messages.success(request, "Meme adicionado com sucesso!")
        return redirect ('home')

    return render(request,'add.html')

def ver(request):
    return render(request,'ver.html')

def edit(request):
    return render(request,'edit.html')

def delete(request):
    return render(request,'delete.html')