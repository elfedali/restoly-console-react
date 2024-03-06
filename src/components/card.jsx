import React from 'react'
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function CardRestaurant() {
    return (
        <Card >
            <Card.Img variant="top" src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>
                        Foodek Restaurant
                    </Card.Title>
                    {/* dropdown menu edit delete */}
                    <NavDropdown
                        title="Edit"
                        id="basic-nav-dropdown"
                        align={'end'}

                    >
                        <NavDropdown.Item href='/r/1'>General</NavDropdown.Item>

                        <NavDropdown.Item href='/r/1/menu'>Menu</NavDropdown.Item>

                        <NavDropdown.Item href='/r/1/photos'>Photos</NavDropdown.Item>

                        <NavDropdown.Item href='/r/1/hours'>Hours</NavDropdown.Item>

                        <NavDropdown.Item href='/r/1/reviews'>Reviews</NavDropdown.Item>

                        <NavDropdown.Item href='/r/1/seo'>SEO</NavDropdown.Item>

                        <Dropdown.Divider />
                        <NavDropdown.Item href='/r/1/delete'>
                            <span className='text-danger'>
                                Delete
                            </span>
                        </NavDropdown.Item>


                    </NavDropdown>
                </div>

                <Card.Text className='text-muted small'>
                    52 rue de la paix<br />Roches Noires 75000 Casablanca

                </Card.Text>
                <Card.Text>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='text-muted small'>STATUT</div>
                            <div className='text-muted small'>Publié</div>
                        </div>
                        <div>
                            <div className='text-muted small'>DATE D'AJOUT</div>
                            <div className='text-muted small'>
                                12/12/2024
                            </div>
                        </div>
                    </div>
                </Card.Text>
                {/* <Button variant="secondary"
                    className='w-100'
                >
                    Voir le restaurant
                </Button> */}
                {/* <a href="/r/1" className='btn btn-secondary w-100'>Voir le restaurant</a> */}
                <Link to="/r/1" className='btn btn-secondary w-100'>Voir le restaurant</Link>
            </Card.Body>
        </Card>
    );
}
