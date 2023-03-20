import TableComponent from "@/componentes/tabla";
import Layout from "@/componentes/Layout";


export default function Entrenadores() {

        const data = [{

            "idEntrenador": 1,
            "nombreEntrenador": "Carlo Ancelotti",
            "apodoEntrenador": "Carleto",
            "fechaNacimientoEntrenador": null,
            "nacionalidadEntrenador": "Italiana",
            imageUrl: "/entrenadores/1.jpg"

        }]
        const columns = [
            {
                Header: 'Nombre',
                accessor: 'apodoEntrenador',
            },
            {
                Header: 'Nacionalidad',
                accessor: 'nacionalidadEntrenador',
            }
        ];

        return (
            <>
                <Layout title={"hola"}></Layout>
                <TableComponent data={data} columns={columns}/>
            </>
        )
    }
