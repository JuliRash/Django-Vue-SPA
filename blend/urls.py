
from django.contrib import admin
from django.urls import include, path

from rest_framework_swagger.views import get_swagger_view

from .routers import router

schema_view = get_swagger_view(title='Blog API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('article.urls')),
    path('swagger-docs/', schema_view),
]
