from django.db import models

# Create your models here.

class Posicion(models.Model):
    idPosicion = models.AutoField(primary_key=True)
    nombrePosicion = models.CharField(max_length=200)
    estadoPosicion = models.BooleanField(default=True)


class Jugador(models.Model):
    idJugador = models.AutoField(primary_key=True)
    nombreJugador = models.CharField(max_length=200)
    apodoJugador = models.CharField(max_length=200)
    nacionalidadJugador = models.CharField(max_length=200)
    fechaNacimientoJugador = models.DateTimeField('fecha de nacimiento')
    alturaJugador = models.DecimalField(max_digits=5, decimal_places=3)
    numeroFavorito = models.DecimalField(max_digits=2, decimal_places=0)
    posicion = models.ForeignKey(Posicion, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombreJugador


class Entrenador(models.Model):
    idEntrenador = models.AutoField(primary_key=True)
    nombreEntrenador = models.CharField(max_length=200)
    apodoEntrenador = models.CharField(max_length=200)
    fechaNacimientoEntrenador = models.DateTimeField('fecha de nacimiento')
    nacionalidadEntrenador = models.CharField(max_length=200)


class Equipo(models.Model):
    idEquipo = models.AutoField(primary_key=True)
    codigoEquipo = models.CharField(max_length=200)
    nombreEquipo = models.CharField(max_length=200)
    anioFundacionEquipo = models.DecimalField(max_digits=4, decimal_places=0)
    escudoEquipo = models.ImageField(upload_to='../utils/equipos', null=True, blank=True)
    entrenador = models.ManyToManyField(Entrenador, through='EntrenadorEquipoTiempo')
    jugadores = models.ManyToManyField(Jugador, through='JugadorEquipoTiempo')

class JugadorEquipoTiempo(models.Model):
    jugador = models.ForeignKey(Jugador, on_delete=models.CASCADE)
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE)
    fechaInicioContrato = models.DateField()
    fechaFinContrato = models.DateField()
    dorsalJugador = models.DecimalField(max_digits=2, decimal_places=0)

    class Meta:
        unique_together = (('jugador', 'equipo'),)

class EntrenadorEquipoTiempo(models.Model):
    entrenador = models.ForeignKey(Entrenador, on_delete=models.CASCADE)
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE)
    fechaInicioContrato = models.DateField()
    fechaFinContrato = models.DateField()
    class Meta:
        unique_together = (('entrenador', 'equipo'),)
