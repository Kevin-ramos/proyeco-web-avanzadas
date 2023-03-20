import CarouselComponent from "@/componentes/CarouselComponent";
import Layout from "@/componentes/Layout";
import MyCalendar from "@/componentes/calendario";
import CalendarComponent from "@/componentes/calendario";


export default function Home() {
  return (
      <>
          <Layout title="Home"></Layout>
          <p>Real Madrid es uno de los equipos de fútbol más emblemáticos y exitosos de la historia. Desde su fundación en 1902, ha sido el hogar de algunos de los jugadores más talentosos y famosos del mundo. Con una larga lista de títulos en su haber, el Real Madrid ha sido el hogar de leyendas como Ferenc Puskás, Alfredo Di Stéfano, Zinedine Zidane, Cristiano Ronaldo y muchos otros. Estos jugadores han dejado una huella indeleble en la historia del fútbol y en la memoria de los aficionados alrededor del mundo. A lo largo de los años, el Real Madrid ha continuado atrayendo a algunos de los jugadores más brillantes y emocionantes del mundo del fútbol, y ha mantenido su lugar como uno de los clubes más admirados y exitosos del planeta. </p>
          <h1>Jugadores</h1>
          <div style={{ display: "flex", flexDirection: "row", height: "50vh"}}>
              <div style={{ flex: "1", alignItems: "center", width:"1px",height:"170px",justifyContent: "center"}}>
                  <CarouselComponent />
              </div>
              <div style={{ flex: "1", alignItems: "center", justifyContent: "center"}}>
                  <CalendarComponent />
              </div>
          </div>
      </>

  )
}
