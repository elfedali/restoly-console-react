import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function CardRestaurant({ restaurant }) {
    return (
        <Card>
            <Link to={`/r/${restaurant.id}`} title='Voir le restaurant'>
                <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            </Link>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>{restaurant.title}</Card.Title>
                    {/* dropdown menu edit delete */}
                    <NavDropdown title="Modifier" id="basic-nav-dropdown" align={'end'}>
                        <NavDropdown.Item href={`/r/${restaurant.id}`}>General</NavDropdown.Item>
                        <NavDropdown.Item href={`/r/${restaurant.id}/menu`}>Menu</NavDropdown.Item>
                        <NavDropdown.Item href={`/r/${restaurant.id}/photos`}>Photos</NavDropdown.Item>
                        <NavDropdown.Item href={`/r/${restaurant.id}/hours`}>Hours</NavDropdown.Item>
                        <NavDropdown.Item href={`/r/${restaurant.id}/reviews`}>Reviews</NavDropdown.Item>
                        <NavDropdown.Item href={`/r/${restaurant.id}/seo`}>SEO</NavDropdown.Item>
                        <Dropdown.Divider />
                        <NavDropdown.Item href={`/r/${restaurant.id}/delete`}>
                            <span className='text-danger'>Delete</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <Card.Text className='text-muted small'>
                    {restaurant.address}
                </Card.Text>
                <Card.Text>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='text-muted small'>STATUT</div>
                            <div className='text-muted small'>{restaurant.status}</div>
                        </div>
                        <div>
                            <div className='text-muted small'>DATE D'AJOUT</div>
                            <div className='text-muted small'>{restaurant.created_at}</div>
                        </div>
                    </div>
                </Card.Text>
                <Link to={`/r/${restaurant.id}`} className='btn btn-secondary w-100'>Voir le restaurant</Link>
            </Card.Body>
        </Card>
    );
}
