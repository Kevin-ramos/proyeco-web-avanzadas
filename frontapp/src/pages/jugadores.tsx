import TableComponent from "@/componentes/tabla";
import Layout from "@/componentes/Layout";


export default function Jugadores() {
    const data = [{
        "idJugador": 1,
        "nombreJugador": "Thibaut Courtois",
        "apodoJugador": "Courtois",
        "nacionalidadJugador": "Belga",
        "fechaNacimientoJugador": "1992-05-11T00:00:00Z",
        "alturaJugador": "1.990",
        "numeroFavorito": "1",
        "posicion": 2,
        imageUrl: "/jugadores/1.jpg"
    },
        {
            "idJugador": 2,
            "nombreJugador": "Dani Carvajal",
            "apodoJugador": "Carvajal",
            "nacionalidadJugador": "Español",
            "fechaNacimientoJugador": "1992-01-11T00:00:00Z",
            "alturaJugador": "1.730",
            "numeroFavorito": "2",
            "posicion": 4,
            imageUrl: "/jugadores/2.jpg"
        },
        {
            "idJugador": 3,
            "nombreJugador": "Eder Militao",
            "apodoJugador": "Militao",
            "nacionalidadJugador": "Brasileño",
            "fechaNacimientoJugador": "1986-03-30T00:00:00Z",
            "alturaJugador": "1.840",
            "numeroFavorito": "4",
            "posicion": 3,
            imageUrl: "/jugadores/3.jpg"
        },
        {
            "idJugador": 4,
            "nombreJugador": "David Alaba",
            "apodoJugador": "Alaba",
            "nacionalidadJugador": "Austriaca",
            "fechaNacimientoJugador": "1993-04-25T00:00:00Z",
            "alturaJugador": "1.910",
            "numeroFavorito": "5",
            "posicion": 3,
            imageUrl: "/jugadores/4.jpg"
        },
        {
            "idJugador": 5,
            "nombreJugador": "Ferland Mendy",
            "apodoJugador": "Mendy",
            "nacionalidadJugador": "Francés",
            "fechaNacimientoJugador": "1988-05-12T00:00:00Z",
            "alturaJugador": "1.740",
            "numeroFavorito": "12",
            "posicion": 5,
            imageUrl: "/jugadores/5.jpg"
        },
        {
            "idJugador": 6,
            "nombreJugador": "Federico Valverde",
            "apodoJugador": "Valverde",
            "nacionalidadJugador": "Uruguayo",
            "fechaNacimientoJugador": "1992-02-23T00:00:00Z",
            "alturaJugador": "1.840",
            "numeroFavorito": "14",
            "posicion": 6,
            imageUrl: "/jugadores/6.jpg"
        },
        {
            "idJugador": 7,
            "nombreJugador": "Luka Modric",
            "apodoJugador": "Modric",
            "nacionalidadJugador": "Croata",
            "fechaNacimientoJugador": "1985-09-09T00:00:00Z",
            "alturaJugador": "1.720",
            "numeroFavorito": "10",
            "posicion": 7,
            imageUrl: "/jugadores/7.jpg"
        },
        {
            "idJugador": 8,
            "nombreJugador": "Toni Kroos",
            "apodoJugador": "Kroos",
            "nacionalidadJugador": "Alemán",
            "fechaNacimientoJugador": "1990-01-04T00:00:00Z",
            "alturaJugador": "1.830",
            "numeroFavorito": "8",
            "posicion": 7,
            imageUrl: "/jugadores/8.jpg"
        },
        {
            "idJugador": 9,
            "nombreJugador": "Eden Hazard",
            "apodoJugador": "Hazard",
            "nacionalidadJugador": "Belga",
            "fechaNacimientoJugador": "1991-01-07T00:00:00Z",
            "alturaJugador": "1.750",
            "numeroFavorito": "7",
            "posicion": 11,
            imageUrl: "/jugadores/9.jpg"
        },
        {
            "idJugador": 10,
            "nombreJugador": "Vinicius Junior",
            "apodoJugador": "Vinicius Jr.",
            "nacionalidadJugador": "Brasileño",
            "fechaNacimientoJugador": "2000-07-12T00:00:00Z",
            "alturaJugador": "1.760",
            "numeroFavorito": "20",
            "posicion": 11,
            imageUrl: "/jugadores/10.jpg"
        },
        {
            "idJugador": 11,
            "nombreJugador": "Karim Benzema",
            "apodoJugador": "Benzema",
            "nacionalidadJugador": "Francés",
            "fechaNacimientoJugador": "1987-12-19T00:00:00Z",
            "alturaJugador": "1.850",
            "numeroFavorito": "9",
            "posicion": 12,
            imageUrl: "/jugadores/11.jpg"
        }
    ]


    const columns = [
        {
            Header: 'Nombre',
            accessor: 'apodoJugador',
        },
        {
            Header: 'Nacionalidad',
            accessor: 'nacionalidadJugador',
        },
        {
            Header: 'Fecha de Nacimiento',
            accessor: 'fechaNacimientoJugador',
        }
    ];

    return (
        <>
            <Layout title={"hola"}></Layout>
            <TableComponent data={data} columns={columns}/>
        </>
    )

}
