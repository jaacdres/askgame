from juegoPreguntasApp.models.respuesta import Respuesta
from rest_framework import serializers

class RespuestaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Respuesta
        fields = ['id', 'pregunta', 'respuesta', 'verdadera']