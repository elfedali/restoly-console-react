import React from 'react'
import CardRestaurant from '../../components/card'
import { Button, Col, Row } from 'react-bootstrap'

export default function Restaurants() {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <h1 className='h4 mb-4'>
          <span className='me-4'>
            Vous restaurants
          </span>

        </h1>
        <div>
          <Button variant="primary" className='float-right'> + Ajouter un restaurant

          </Button>
        </div>
      </div>
      <Row>
        <Col lg={4}>
          <CardRestaurant />
        </Col>
        <Col lg={4}>
          <CardRestaurant />
        </Col>


      </Row>


    </>
  )
}
