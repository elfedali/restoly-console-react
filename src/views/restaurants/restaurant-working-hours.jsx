import React from 'react'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'

export default function RestaurantWorkingHours() {
    let jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    return (
        <>


            <Card className='bg-white'>
                <Card.Body>
                    <Form>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Jour</th>
                                    <th>Statut</th>
                                    <th>Overture</th>
                                    <th>Fermeture</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jours.map((jour, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{jour}</td>
                                            <td>
                                                <Form.Check type="switch" id="custom-switch" label="Ouvert" />
                                            </td>
                                            <td>
                                                <Form.Control type="time" placeholder="Ouverture" />
                                            </td>
                                            <td>
                                                <Form.Control type="time" placeholder="Fermeture" />
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>



                        </Table>

                        <Button variant="primary" >
                            Mettre à jour
                        </Button>

                    </Form>
                </Card.Body>
            </Card>

        </>
    )
}


