from django.db import models

class Article(models.Model):
    article_id = models.AutoField(primary_key=True)
    article_title = models.CharField(max_length=300)
    article_body = models.TextField()
