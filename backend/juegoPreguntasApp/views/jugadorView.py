from rest_framework import generics, views, status
from juegoPreguntasApp.models.jugador import Jugador
from juegoPreguntasApp.serializers.jugadorSerializer import JugadorSerializer


#listar todos los jugadores, crear un jugador
class JugadorListCreateView(generics.ListCreateAPIView):
    queryset = Jugador.objects.all()
    serializer_class = JugadorSerializer