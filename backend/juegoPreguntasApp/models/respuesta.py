from django.db import models
from .pregunta import Pregunta

class Respuesta(models.Model):
    id = models.AutoField(primary_key=True)
    respuesta = models.TextField(max_length=200, null=True, blank=True)
    verdadera = models.BooleanField(default=False)
    pregunta = models.ForeignKey(Pregunta, related_name="pregunta_respuesta", on_delete=models.SET_NULL, null= True)