from django.contrib import admin

from article.models import Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['article_title', 'article_body']


admin.site.register(Article, ArticleAdmin)