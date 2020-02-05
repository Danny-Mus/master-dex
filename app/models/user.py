from django.contrib.auth.models import AbstractBaseUser
from django.db import models

from safedelete.models import SafeDeleteModel
from safedelete.models import SOFT_DELETE


class User(AbstractBaseUser, SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE

    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
