import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import ModalComp from './ModalComp';

function FlipCard( { film, poster, button } ) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="row_poster" src={ poster } alt={film.title} />
        </div>
        <div className="flip-card-back">
          <div>
            <br />
            <h4 className="h4Card" >{film.title}</h4>
            <br />
            <br />
            <p className="pCard" >Director: {film.director}</p>
            <p className="pCard" >Release Date: {film.release_date}</p>
            { button ? <Button onClick={() => setModalShow(true)} className="buttonCard" variant="dark">See opening</Button> : <></>}
            
          </div>
        </div>
      </div>
    </div>
    <ModalComp show={modalShow} film={film} onHide={() => setModalShow(false)}/>
    </>
  );
}
  
export default FlipCard;