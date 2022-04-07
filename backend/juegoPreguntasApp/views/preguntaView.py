from rest_framework import generics, views, status
from juegoPreguntasApp.models.pregunta import Pregunta
from juegoPreguntasApp.serializers.preguntaSerializer import PreguntaSerializer

#listar preguntas
class PreguntaListView(generics.ListAPIView):
    queryset = Pregunta.objects.all()
    serializer_class = PreguntaSerializer 