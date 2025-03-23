from django.shortcuts import render, redirect,get_object_or_404
from .models import Meme
from django.contrib import messages

def home(request):
    return render(request,'index.html')

def add(request):
    if request.method == 'POST':
        nome = request.POST.get('nome')
        descricao = request.POST.get('descricao')
        ano = request.POST.get('ano')
        imagem = request.FILES.get('imagem')

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

def edit(request, id):
    meme = Meme.objects.filter(id=id).first()

    if request.method == 'POST':
        meme.nome = request.POST.get('nome')
        meme.descricao = request.POST.get('descricao')
        meme.ano = request.POST.get('ano')

        if 'imagem' in request.FILES:
            meme.imagem = request.FILES.get('imagem')

        meme.save()
        return redirect('ver')
    
    context = {
        'meme': meme
    }

    return render(request, 'add.html', context)


def delete(request,id):
    
    meme = get_object_or_404(Meme,id=id)
    meme.delete()



    return redirect ('ver')