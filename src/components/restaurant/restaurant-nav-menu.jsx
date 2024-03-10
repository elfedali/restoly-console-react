import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function RestaurantNavMenu({ restaurant }) {
    const restaurantId = restaurant.id;

    return (
        <Nav variant='underline' className='mb-3' as='ul'>
            <Nav.Item>
                <NavLink end className='nav-link ps-0' to={`/r/${restaurantId}`}>
                    Général
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to={`/r/${restaurantId}/menu`}>
                    Menu
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to={`/r/${restaurantId}/photos`}>
                    Photos
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to={`/r/${restaurantId}/hours`}>
                    Heures d'ouverture
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to={`/r/${restaurantId}/reviews`}>
                    Avis
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className='nav-link' to={`/r/${restaurantId}/seo`}>
                    SEO
                </NavLink>
            </Nav.Item>
        </Nav>
    );
}
