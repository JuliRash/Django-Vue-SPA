from rest_framework import viewsets

from article.models import Article
from article.serializers import ArticleSerializer


class ArticleViewset(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

