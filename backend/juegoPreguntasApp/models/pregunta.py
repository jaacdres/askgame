from django.db import models

class Pregunta(models.Model):
    id = models.AutoField(primary_key=True)
    nivel = models.PositiveIntegerField(null=True, blank = True, default=0)
    pregunta = models.TextField(max_length=400, null=True, blank=True)