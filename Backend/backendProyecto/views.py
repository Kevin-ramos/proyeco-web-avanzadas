from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from backendProyecto.models import Equipo, Jugador, Entrenador
from backendProyecto.serializers import EquipoSerializer, JugadorSerializer, EntrenadorSerializer


# Create your views here.

class EquiposLista(APIView):
    def get(self, request):
        equipos = Equipo.objects.all()
        serializer = EquipoSerializer(equipos, many=True)
        return Response(serializer.data)

class EquipoLista(APIView):
    def get(self,request, idEquipo):
        equipo = Equipo.objects.filter(idEquipo=idEquipo)
        serializers = EquipoSerializer(equipo,many=True)
        return Response(serializers.data)


class JugadoresLista(APIView):
    def get(self, request):
        jugadores = Jugador.objects.all()
        serializer = JugadorSerializer(jugadores, many=True)
        return Response(serializer.data)

class JugadorLista(APIView):
    def get(self, request,idJugador):
        jugador = Jugador.objects.filter(idJugador=idJugador)
        serializer = JugadorSerializer(jugador, many=True)
        return Response(serializer.data)


class EntrenadoresLista(APIView):
    def get(self, request):
        entrenadores = Entrenador.objects.all()
        serializer = EntrenadorSerializer(entrenadores, many=True)
        return Response(serializer.data)

class EntrenadorLista(APIView):
    def get(self, request,idEntrenador):
        entrenador = Entrenador.objects.filter(idEntrenador=idEntrenador)
        serializer = EntrenadorSerializer(entrenador, many=True)
        return Response(serializer.data)
