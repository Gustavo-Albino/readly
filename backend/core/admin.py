from django.contrib import admin
from .models import Livro

# Register your models here.

class LivroAdmin(admin.ModelAdmin):
  list_display = ('titulo', 'autor', 'capa')

admin.site.register(Livro, LivroAdmin)