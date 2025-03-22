from django.db import models


class Meme(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)
    ano = models.IntegerField()
    imagem = models.ImageField(upload_to='imagens')

    def __str__(self):
        return self.nome
