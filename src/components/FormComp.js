import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

function FormComp( {planets, addfilm, show, onHide} ) {

   
    const [episodeIdValue, setEpisodeIdValue] = useState()
    const [titleValue, setTitleValue] = useState()
    const [producerValue, setProducerValue] = useState()
    const [relaeseDateValue, setRelaeseDateValue] = useState()
    const [directorValue, setDirectorValue] = useState()
    const [planetValue, setPlanetValue] = useState()
    const [urlValue, setUrlValue] = useState()


    const createFilm = (e) => {
        
        e.preventDefault()
        addfilm({
                    episode_id: episodeIdValue,
                    title: titleValue,
                    producer: producerValue,
                    director: directorValue,
                    release_date: relaeseDateValue,
                    planets: planetValue,
                    posterUrl: urlValue
                })


        setEpisodeIdValue()
        setTitleValue()
        setProducerValue()
        setRelaeseDateValue()
        setDirectorValue()
        setPlanetValue()
        setUrlValue()
    }
    
    console.log(onHide)
    return (
        <Modal
        show={show}
        onHide = {onHide}
        onSubmit = {onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Film
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  onSubmit={ createFilm } >
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Episode id</Form.Label>
                            <Form.Control required type="number"  onChange={ (e) => setEpisodeIdValue(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" onChange={ (e) => setTitleValue(e.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Producer</Form.Label>
                            <Form.Control required type="text" onChange={ (e) => setProducerValue(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Release date</Form.Label>
                            <Form.Control required type="date" onChange={ (e) => setRelaeseDateValue(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Director</Form.Label>
                            <Form.Control required type="text" onChange={ (e) => setDirectorValue(e.target.value)} />
                        </Form.Group>

                        <Form.Group  as={Col} className="mb-3">
                        <Form.Label>Planet</Form.Label>
                            <Form.Select required onChange={ (e) => setPlanetValue(e.target.value)}>
                                <option defaultValue hidden > -- Select a planet -- </option>
                                {planets.map((planet,index) =>(
                                    <option key={index}>{planet.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Poster Image</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3">
                            <Form.Label>Poster Image URL</Form.Label>
                            <Form.Control type="text" size="sm" onChange={ (e) => setUrlValue(e.target.value)} />
                        </Form.Group>
                    </Row>
                    
                    <Button variant="dark" type="submit"> Submit </Button>
                    
                </Form>
            </Modal.Body>           
        </Modal>
    )
}

export default FormComp