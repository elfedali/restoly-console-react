import React from 'react'
import { Outlet } from 'react-router-dom'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'

export default function RestaurantsBase() {
    return (
        <>

            <h1 className='h4'>
                Foodek Restaurant
            </h1>
            <RestaurantNavMenu />
            <Outlet />
        </>

    )
}
