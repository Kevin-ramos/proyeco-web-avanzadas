import TableComponent from "@/componentes/tabla";
import Layout from "@/componentes/Layout";


export default function Equipos() {

    const data = [
        {
            "idEquipo": 1,
            "entrenador": [
                {
                    "idEntrenador": 1,
                    "nombreEntrenador": "Carlo Ancelotti",
                    "apodoEntrenador": "Carleto",
                    "fechaNacimientoEntrenador": null,
                    "nacionalidadEntrenador": "Italiana"
                }
            ],
            "jugadores": [
                {
                    "idJugador": 1,
                    "nombreJugador": "Thibaut Courtois",
                    "apodoJugador": "Courtois",
                    "nacionalidadJugador": "Belga",
                    "fechaNacimientoJugador": "1992-05-11T00:00:00Z",
                    "alturaJugador": "1.990",
                    "numeroFavorito": "1",
                    "posicion": 2
                },
                {
                    "idJugador": 2,
                    "nombreJugador": "Dani Carvajal",
                    "apodoJugador": "Carvajal",
                    "nacionalidadJugador": "Español",
                    "fechaNacimientoJugador": "1992-01-11T00:00:00Z",
                    "alturaJugador": "1.730",
                    "numeroFavorito": "2",
                    "posicion": 4
                },
                {
                    "idJugador": 3,
                    "nombreJugador": "Eder Militao",
                    "apodoJugador": "Militao",
                    "nacionalidadJugador": "Brasileño",
                    "fechaNacimientoJugador": "1986-03-30T00:00:00Z",
                    "alturaJugador": "1.840",
                    "numeroFavorito": "4",
                    "posicion": 3
                },
                {
                    "idJugador": 4,
                    "nombreJugador": "David Alaba",
                    "apodoJugador": "Alaba",
                    "nacionalidadJugador": "Austriaca",
                    "fechaNacimientoJugador": "1993-04-25T00:00:00Z",
                    "alturaJugador": "1.910",
                    "numeroFavorito": "5",
                    "posicion": 3
                },
                {
                    "idJugador": 5,
                    "nombreJugador": "Ferland Mendy",
                    "apodoJugador": "Mendy",
                    "nacionalidadJugador": "Francés",
                    "fechaNacimientoJugador": "1988-05-12T00:00:00Z",
                    "alturaJugador": "1.740",
                    "numeroFavorito": "12",
                    "posicion": 5
                },
                {
                    "idJugador": 6,
                    "nombreJugador": "Federico Valverde",
                    "apodoJugador": "Valverde",
                    "nacionalidadJugador": "Uruguayo",
                    "fechaNacimientoJugador": "1992-02-23T00:00:00Z",
                    "alturaJugador": "1.840",
                    "numeroFavorito": "14",
                    "posicion": 6
                },
                {
                    "idJugador": 7,
                    "nombreJugador": "Luka Modric",
                    "apodoJugador": "Modric",
                    "nacionalidadJugador": "Croata",
                    "fechaNacimientoJugador": "1985-09-09T00:00:00Z",
                    "alturaJugador": "1.720",
                    "numeroFavorito": "10",
                    "posicion": 7
                },
                {
                    "idJugador": 8,
                    "nombreJugador": "Toni Kroos",
                    "apodoJugador": "Kroos",
                    "nacionalidadJugador": "Alemán",
                    "fechaNacimientoJugador": "1990-01-04T00:00:00Z",
                    "alturaJugador": "1.830",
                    "numeroFavorito": "8",
                    "posicion": 7
                },
                {
                    "idJugador": 9,
                    "nombreJugador": "Eden Hazard",
                    "apodoJugador": "Hazard",
                    "nacionalidadJugador": "Belga",
                    "fechaNacimientoJugador": "1991-01-07T00:00:00Z",
                    "alturaJugador": "1.750",
                    "numeroFavorito": "7",
                    "posicion": 11
                },
                {
                    "idJugador": 10,
                    "nombreJugador": "Vinicius Junior",
                    "apodoJugador": "Vinicius Jr.",
                    "nacionalidadJugador": "Brasileño",
                    "fechaNacimientoJugador": "2000-07-12T00:00:00Z",
                    "alturaJugador": "1.760",
                    "numeroFavorito": "20",
                    "posicion": 11
                },
                {
                    "idJugador": 11,
                    "nombreJugador": "Karim Benzema",
                    "apodoJugador": "Benzema",
                    "nacionalidadJugador": "Francés",
                    "fechaNacimientoJugador": "1987-12-19T00:00:00Z",
                    "alturaJugador": "1.850",
                    "numeroFavorito": "9",
                    "posicion": 12
                }
            ],
            "codigoEquipo": "001",
            "nombreEquipo": "Real Madrid",
            "anioFundacionEquipo": "1945",
            "escudoEquipo": "/utils/equipos/realMadrid.png",
            imageUrl: "/equipos/realMadrid.png"
        }
    ]
    const columns = [
        {
            Header: 'Nombre',
            accessor: 'nombreEquipo',
        },
        {
            Header: 'Fundación',
            accessor: 'anioFundacionEquipo',
        }
    ];

    return (
        <>
            <Layout title={"hola"}></Layout>
            <TableComponent data={data} columns={columns}/>
        </>
    )
}
