import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'
import Photo from '../../components/photos/photo'

export default function RestaurantPhotos() {
    return (
        <>


            <Card className='bg-white'>
                <Card.Body >
                    <Row>
                        <Col md={4}>
                            <Photo />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <Photo />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>
    )
}


