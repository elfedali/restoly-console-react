import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'

export default function RestaurantGeneral() {
    return (
        <>

            <FormGeneral />

        </>
    )
}




function FormGeneral() {
    return (
        <Form>
            <Row>

                <Col>
                    <Card className='bg-white'>
                        <Card.Body >
                            {/* start */}
                            <Form.Group controlId="field-title" className='mb-4'>
                                <Form.Label>Nom du restaurant * </Form.Label>
                                <Form.Control type="text" placeholder="Nom du restaurant" />
                            </Form.Group>
                            <CuisineTags />
                            <ServiceTags />
                            <AmbianceTags />
                            <NoticeReservation />
                            <hr />
                            <Row>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>Téléphone 1</Form.Label>
                                        <Form.Control type="text" placeholder="Téléphone 1" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>Téléphone 2</Form.Label>
                                        <Form.Control type="text" placeholder="Téléphone 2" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>Téléphone 3</Form.Label>
                                        <Form.Control type="text" placeholder="Téléphone 3" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Adresse du restaurant *</Form.Label>
                                <Form.Control type="text" placeholder="Adresse" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>Ville</Form.Label>
                                        <Form.Control type="text" placeholder="Ville" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>
                                            Quartier
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ville" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="field-" className='mb-4'>
                                        <Form.Label>
                                            Pays
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Ville" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* status */}
                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Statut</Form.Label>
                                <Form.Control as="select">
                                    <option>Publié</option>
                                    <option>Brouillon</option>
                                </Form.Control>
                            </Form.Group>


                        </Card.Body>
                    </Card>
                    {/* end */}
                </Col>
                <Col md={4}>
                    {/* start 2 */}
                    <Card className='bg-white'>
                        <Card.Body >
                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Site web</Form.Label>
                                <Form.Control type="text" placeholder="Site web" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Facebook</Form.Label>
                                <Form.Control type="text" placeholder="Facebook" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Instagram</Form.Label>
                                <Form.Control type="text" placeholder="Instagram" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="text" placeholder="Twitter" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Linkedin</Form.Label>
                                <Form.Control type="text" placeholder="Linkedin" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Youtube</Form.Label>
                                <Form.Control type="text" placeholder="Youtube" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Google My Business</Form.Label>
                                <Form.Control type="text" placeholder="Google My Business" />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Google Maps</Form.Label>
                                <Form.Control type="text" placeholder="Google Maps" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    {/* end 2 */}

                </Col>
            </Row>

            {/* button  */}
            <Row>
                <Col>
                    <button className='btn btn-primary mt-4'>Mettre à jour </button>
                </Col>
            </Row>
        </Form>
    )
}


function AmbianceTags() {
    return (
        <Form.Group controlId="field-" className='mb-4'>
            <Form.Label>Ambiance</Form.Label>
            <Form.Control type="text" placeholder="Ambiance" />
        </Form.Group>
    )
}

function ServiceTags() {
    return (
        <Form.Group controlId="field-" className='mb-4'>
            <Form.Label>Service</Form.Label>
            <Form.Control type="text" placeholder="Service" />
        </Form.Group>
    )
}

function CuisineTags() {
    return (
        <Form.Group controlId="field-cusines" className='mb-4'>
            <Form.Label>Cuisine</Form.Label>
            <Form.Control type="text" placeholder="Cuisine" />
        </Form.Group>
    )
}

function NoticeReservation() {
    return (
        <Form.Group controlId="field-" className='mb-4'>
            <Form.Label>Votre restaurant peut t’il recevoir sans réservation par téléphone ?*</Form.Label>
            {/* radio Oui Non */}
            <Form.Check
                type="radio"
                label="Oui"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                checked
            />
            <Form.Check
                type="radio"
                label="Non"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"

            />
        </Form.Group>
    )
}