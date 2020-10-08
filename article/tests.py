from django.test import TestCase

from .models import Article


class ArticleModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        new_article = Article.objects.create(
            article_title='first article', article_body='first article body')

    def test_article_title(self):
        article = Article.objects.get(id=1)
        expected_object_name = f'{article.article_title}'
        self.assertEquals(expected_object_name, 'first article')

    def test_article_body(self):
        article = Article.objects.get(id=1)
        expected_object_name = f'{article.article_body}'
        self.assertEquals(expected_object_name, 'first article body')
