from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey('User', related_name="user_teams", on_delete=models.CASCADE)
