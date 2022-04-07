from juegoPreguntasApp.models.pregunta import Pregunta
from rest_framework import serializers

class PreguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pregunta
        fields = ['id', 'nivel','pregunta']