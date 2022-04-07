from rest_framework import generics, views, status
from juegoPreguntasApp.models.respuesta import Respuesta
from juegoPreguntasApp.serializers.respuestaSerializer import RespuestaSerializer

#listar preguntas
class RespuestaListView(generics.ListAPIView):
    queryset = Respuesta.objects.all()
    serializer_class = RespuestaSerializer 