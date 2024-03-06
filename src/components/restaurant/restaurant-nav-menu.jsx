import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RestaurantNavMenu() {
    return (
        <Nav variant='underline' className='mb-3' defaultActiveKey='/r/1' as='ul' >
            <Nav.Item >
                <Link className='nav-link ps-0 ' to="/r/1" >
                    Général
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to="/r/1/menu">
                    Menu
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to="/r/1/photos">
                    Photos
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to="/r/1/hours">
                    Heures d'ouverture
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to="/r/1/reviews">
                    Avis
                </Link>
            </Nav.Item>
            <Nav.Item>
                <Link className='nav-link' to="/r/1/seo">
                    SEO
                </Link>
            </Nav.Item>
        </Nav >
    )
}