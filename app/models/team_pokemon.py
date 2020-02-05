from django.db import models


class TeamPokemon(models.Model):
    pokemon_id = models.IntegerField(default=0)
    team = models.ForeignKey('Team', related_name="pokemon", on_delete=models.CASCADE)