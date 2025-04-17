from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LivroViewSet, LivroList

router = DefaultRouter()
router.register(r'livros', LivroViewSet)

urlpatterns = [
  path('', include(router.urls)),
  path('livros/', LivroList.as_view(), name='livro-list'),
]