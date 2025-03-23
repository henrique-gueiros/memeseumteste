from django.db import models


class Meme(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    descricao = models.TextField(null=True, blank=True)
    ano = models.IntegerField()
    imagem = models.ImageField(upload_to='imagens')
    

    def __str__(self):
        return self.nome
