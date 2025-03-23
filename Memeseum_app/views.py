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

        meme = Meme(
            nome =nome,
            descricao = descricao,
            ano = ano,
            imagem = imagem
        )

        try:


            meme.save()
            messages.success(request, "Meme adicionado com sucesso!")
            return redirect ('home')
        except:
            messages.error(request,"opa")

    return render(request,'add.html')

def ver(request):

    
    memes = Meme.objects.all()

    context = {
        'memes':memes
    }

    return render(request,'ver.html',context)

def edit(request):
    return render(request,'edit.html')

def delete(request):
    return render(request,'delete.html')