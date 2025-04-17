from rest_framework import viewsets, serializers
from rest_framework.views import APIView
from rest_framework.response import Response
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

class LivroList(APIView):
    def get(self, request):
        livros = Livro.objects.all()
        serializer = LivroSerializer(livros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

def home(request):
    return HttpResponse("Bem-vindo a página inicial!")