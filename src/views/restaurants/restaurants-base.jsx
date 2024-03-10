import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import RestaurantNavMenu from '../../components/restaurant/restaurant-nav-menu'
import RestaurantService from '../../services/RestaurantService';

export default function RestaurantsBase() {
    // TODO:: this is a copy of the restaurant.jsx file, it should be refactored to use the same file
    const [restaurant, setRestaurant] = useState({
        title: '',
        content: '',
        excerpt: '',
        phone: '',
        phone_secondary: '',
        phone_tertiary: '',
        address: '',
        status: 'published',
        review_status: 'open',
        website: '',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        tiktok: '',
        reservation_required: 'not_required',
    });
    const { id } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await RestaurantService.getRestaurantById(id);
                setRestaurant(response);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };

        fetchRestaurant();
    }, [id]);

    return (
        <>

            <h1 className='h4'>
                {restaurant.title}
            </h1>
            <RestaurantNavMenu restaurant={restaurant} />
            <Outlet />
        </>

    )
}
