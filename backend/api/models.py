from django.db import models

class Produto(models.Model):
    codigo = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    descricao = models.TextField(max_length=500)
    categoria = models.CharField(max_length=16)
