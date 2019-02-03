from rest_framework import routers

from article.views import ArticleViewset

router = routers.DefaultRouter()

router.register(r'article', ArticleViewset)