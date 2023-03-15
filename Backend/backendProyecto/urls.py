
from django.urls import path, include

from backendProyecto.views import EquiposLista, JugadoresLista, EntrenadoresLista, EquipoLista, JugadorLista, \
    EntrenadorLista

urlpatterns = [
path('equiposFutbol', EquiposLista.as_view()),
path('equiposFutbol/<int:idEquipo>/', EquipoLista.as_view()),
path('jugadores', JugadoresLista.as_view()),
path('jugadores/<int:idJugador>/', JugadorLista.as_view()),
path('entrenadores', EntrenadoresLista.as_view()),
path('entrenadores/<int:idEntrenador>/', EntrenadorLista.as_view()),
path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
