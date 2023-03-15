from rest_framework import serializers

from backendProyecto.models import Equipo, Jugador, Entrenador
class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugador
        fields = '__all__'


class EntrenadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entrenador
        fields = '__all__'


class EquipoSerializer(serializers.ModelSerializer):
    entrenador = EntrenadorSerializer(many=True)
    jugadores = JugadorSerializer(many=True)
    class Meta:
        model = Equipo
        fields = '__all__'

