import React from 'react'
import CardRestaurant from '../../components/card'
import { Col, Row } from 'react-bootstrap'

export default function Restaurants() {
  return (
    <>
      <h1 className='h4 mb-4'>
        Vous restaurants
      </h1>

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
