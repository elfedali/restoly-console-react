import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import CardRestaurant from '../../components/card';
import RestaurantService from '../../services/RestaurantService';
// import { ToastContainer, toast } from 'react-toastify';



export default function Restaurants() {
  // const notify = () => toast("Wow so easy!");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await RestaurantService.getRestaurantsByUserId(1);
        setRestaurants(response);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      {/* <button onClick={notify}>Notify!</button>
      <ToastContainer /> */}
      <div className='d-flex justify-content-between'>
        <h1 className='h4 mb-4'>
          <span className='me-4'>Vos restaurants</span>
        </h1>
        <div>
          <Button variant='primary' className='float-right'>
            + Ajouter un restaurant
          </Button>
        </div>
      </div>
      <Row>
        {restaurants.map(restaurant => (
          <Col lg={4} key={restaurant.id}>
            <CardRestaurant restaurant={restaurant} />
          </Col>
        ))}
      </Row>
    </>
  );
}
