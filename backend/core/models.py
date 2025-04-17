from django.db import models

# Create your models here.

class Livro(models.Model):
    titulo = models.CharField(max_length=255)
    autor = models.CharField(max_length=255)
    ano_publicacao = models.IntegerField()
    genero = models.CharField(max_length=100)
    sinopse = models.TextField()
    capa = models.ImageField(upload_to='capas/', blank=True, null=True)
    paginas = models.IntegerField()
    editora = models.CharField(max_length=255)
    idioma = models.CharField(max_length=100)
    isbn = models.CharField(max_length=20, unique=True)
    

    def __str__(self):
        return self.titulo