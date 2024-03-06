import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default function Dish() {
  return (
    <>
      <Form>

        <Row>
          <Col lg={8}>
            <h6>
              DÉTAILS DU PLAT
            </h6>
            <Form.Group controlId='dish-name' className='mb-3'>
              <Form.Label>
                Nom de plat
              </Form.Label>
              <Form.Control type='text' placeholder='Entrez le nom du plat ici...' />
            </Form.Group>
            {/* row (prix,prix-promo, date_start, date-end : fr) */}
            <Row>
              <Col>
                <Form.Group controlId='dish-price' className='mb-3'>
                  <Form.Label>
                    Prix
                  </Form.Label>
                  <Form.Control type='number' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='dish-promo-price' className='mb-3'>
                  <Form.Label>
                    Prix promo
                  </Form.Label>
                  <Form.Control type='number' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='dish-promo-date-start' className='mb-3'>
                  <Form.Label>
                    Prix promo
                  </Form.Label>
                  <Form.Control type='date' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='dish-promo-date-end' className='mb-3'>
                  <Form.Label>
                    Prix promo
                  </Form.Label>
                  <Form.Control type='date' />
                </Form.Group>
              </Col>
            </Row>
            {/* ingredients */}
            <Form.Group controlId='dish-ingredients' className='mb-3'>
              <Form.Label>
                Ingrédients
              </Form.Label>
              <Form.Control as='textarea' placeholder='Entrez les ingrédients ici...' />
            </Form.Group>
            {/* photos de plat */}
            <Form.Group controlId='dish-photos' className='mb-3'>
              <Form.Label>
                Photos
              </Form.Label>
              <Form.Control type='file' />
            </Form.Group>
            <div>
              <img src="https://via.placeholder.com/150" alt="placeholder" />
            </div>


          </Col>
          <Col>
            <h6>
              OPTIONS
            </h6>
            {/* position de plat */}
            <Form.Group controlId='dish-position' className='mb-3'>
              <Form.Label>
                Position
              </Form.Label>
              <Form.Control type='number' />
            </Form.Group>
            {/* plat disponible Oui Non */}
            <Form.Group controlId='dish-available' className='mb-3'>
              <Form.Label>
                Ce plat est-il disponible ?
              </Form.Label>
              <Form.Check type='switch' />
              <Form.Text className='text-muted'>
                Si le plat est disponible
              </Form.Text>
            </Form.Group>
            {/* ce plat est végitarien */}
            <Form.Group controlId='dish-vegetarian' className='mb-3'>
              <Form.Label>
                Ce plat est-il végitarien ?
              </Form.Label>
              <Form.Check type='switch' />
              <Form.Text className='text-muted'>
                Si le plat est végitarien
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <hr />

        <div className='d-flex justify-content-end gap-3 pb-3 pe-3'>
          <button className="btn btn-primary" size='sm'>
            Metrre à jour le plat
          </button>
          <button className="btn btn-outline-danger" size='sm'>
            Supprimer le plat
          </button>
        </div>



      </Form>
    </>
  )
}
