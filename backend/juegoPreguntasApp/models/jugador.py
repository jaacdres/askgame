from django.db import models

class Jugador(models.Model):
    id = models.AutoField(primary_key=True)
    premioGanado = models.PositiveIntegerField(null=True, blank = True, default=0)