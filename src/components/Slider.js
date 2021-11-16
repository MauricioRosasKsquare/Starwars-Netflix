import Carousel from 'react-bootstrap/Carousel'


function Slider( { images } ) {
    return (
        <Carousel controls={false} className="p-4">
            <Carousel.Item>
                <img
                className="d-block img-fluid mx-auto my-auto"
                src={ images[0] }
                alt="Star Wars films"
                id= "imgCarousel"
                />
                <Carousel.Caption>
                    <h3>Films</h3>
                    <p>Find all star wars films</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid mx-auto "
                src={ images[1] }
                alt="Star Wars planets"
                id= "imgCarousel"
                />

                <Carousel.Caption>
                <h2>Coming Soon</h2>
                <p>Find all star wars planets</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
