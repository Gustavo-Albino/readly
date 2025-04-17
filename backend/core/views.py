from rest_framework import viewsets, serializers
from .models import Livro
from .serializers import LivroSerializer
from django.http import HttpResponse

# Create your views here.

class LivroViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows livros to be viewed or edited.
    """
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer

class LivroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Livro
        fields = ['titulo', 'autor', 'capa']

def home(request):
    return HttpResponse("Bem-vindo a página inicial!")