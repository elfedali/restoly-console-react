import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'
import NewMenuCategory from '../../components/menu/new-menu-category'
import MenuList from '../../components/menu/menu-list'

export default function RestaurantMenu() {
    return (
        <>
            <h1>
                Foodek Restaurant
            </h1>
            <RestaurantNavMenu />
            <Card className='bg-white mb-4'>
                <Card.Body>
                    <NewMenuCategory />

                </Card.Body>
            </Card>

            <MenuList />
            <div className='mb-4'></div>
            <MenuList />




        </>
    )
}


