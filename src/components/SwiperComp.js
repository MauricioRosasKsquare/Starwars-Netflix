import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.scss';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import FlipCard from './FlipCard';
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormComp from './FormComp';
import { useState } from 'react'


SwiperCore.use([Pagination, Navigation]);



function SwiperComp({ films, posters, title, loading, loadingPlanets, planets }) {

    const [extraFilms, setExtraFilms] = useState([])

    const addFilm = (newFilm) => {
        setExtraFilms([...extraFilms, newFilm])
    }

    function findPoster(episode){
        let poster = posters.find(poster => poster.episode === episode )
        return poster.url
    }
    const [modalShow, setModalShow] = useState(false);
    
    return (
        
        <div>
            <Container fluid>
                <Row >
                    <Col  md={4}>
                        <h1 className="title_row">{title}</h1>
                    </Col>
                    {!loadingPlanets ? (<Col md={{ span: 4, offset: 4 }} style={{textAlign:'right', paddingRight: "50px"}}> 
                        <Button  onClick={() => setModalShow(true)} id="colorButton" size="lg">Add film</Button> 
                    </Col>) : <></>}
                </Row>
            </Container>
            <FormComp addfilm={addFilm} planets={planets} show={modalShow} onHide={() => setModalShow(false)}/>
            {loading ? 
                    (<div  style={{ height:"413px"}}>
                        <Spinner id="spinnerColor" animation="border" role="status" style={{ position: "absolute", left: "45%", bottom: "0", width: "8rem", height: "8rem"}}/>
                    </div> ):
                
                    (<Swiper slidesPerView={3} loop={true} className="mySwiper" navigation={true}>
                        {films.map((film, index) => (
                            <SwiperSlide key={index}>
                                <FlipCard film={film} poster={findPoster(film.episode_id )} button={true}/>
                            </SwiperSlide>
                        ))}

                        {extraFilms.map((extraFilm, index) => (
                            <SwiperSlide key={index}>
                                <FlipCard film={extraFilm} poster={findPoster("Default")} button={false}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>)}
        </div>
        
    )
}     

export default SwiperComp
