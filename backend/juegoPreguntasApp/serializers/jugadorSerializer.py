from juegoPreguntasApp.models.jugador import Jugador
from rest_framework import serializers

class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = ['premioGanado']