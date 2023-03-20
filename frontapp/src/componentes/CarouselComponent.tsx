import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent() {
    const images=[
        { src: '/jugadores/1.jpg', legend: 'Jugador' },
        { src: '/jugadores/2.jpg', legend: 'Jugador' },
        { src: '/jugadores/3.jpg', legend: 'Jugador' },
        { src: '/jugadores/4.jpg', legend: 'Jugador' },
        { src: '/jugadores/5.jpg', legend: 'Jugador' },
        { src: '/jugadores/6.jpg', legend: 'Jugador' },
        { src: '/jugadores/7.jpg', legend: 'Jugador' },
        { src: '/jugadores/8.jpg', legend: 'Jugador' },
        { src: '/jugadores/9.jpg', legend: 'Jugador' },
    ]
    return (
        <Carousel>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt="Imagen" width="100px" height="150px"/>
                    <p className="legend">{image.legend}</p>
                </div>
            ))}
        </Carousel>
    );
}
