from django.conf.urls.static import static
from django.urls import path

from api import settings
from app.views import users
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users',  users.UsersViewSet, basename='user')

urlpatterns = [
    path('users/create', users.create)
]

urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
