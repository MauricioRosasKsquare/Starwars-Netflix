import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ModalComp(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.film.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Opening Crawl</h4>
          <p>
            {props.film.opening_crawl}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalComp