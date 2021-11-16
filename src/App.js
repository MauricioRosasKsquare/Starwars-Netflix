import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SwiperComp from './components/SwiperComp';
import images from './resources/images'
import Slider from './components/Slider';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';

function App() {

const [films, setFilms] = useState([])
const [planets, setPlanets] = useState([])
const [isloading, setIsLoading] = useState(true)
const [isloadingPlanets, setIsLoadingPlanets] = useState(true)

useEffect(() => {
  async function getFilms(){
     await fetch('https://swapi.dev/api/films/?format=json')
    .then(response => response.json())
    .then(data => setFilms(data.results));
    setIsLoading(false)
  }

  async function getPlanets(){
    await fetch('https://swapi.dev/api/planets/?format=json')
   .then(response => response.json())
   .then(data => setPlanets(data.results));
   setIsLoadingPlanets(false)
 }
  
  getFilms()
  getPlanets()

}, [])

  return (
    <>
      <NavbarComp logo= {images.Logo}/>
      <Slider images={images.Carousel} />
      <SwiperComp films={ films }  posters={ images.Poster } title="Films" loading={isloading} loadingPlanets={isloadingPlanets} planets={planets}/> 
      <Footer />
    </>
  )
}

export default App;
