import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import RestaurantService from '../../services/RestaurantService';

export default function NewMenuCategory({ restaurantId, onSuccess, onError }) {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newCategory = await RestaurantService.createMenuCategory(restaurantId, { title: categoryName });
      setCategoryName('');
      onSuccess(newCategory);
    } catch (error) {
      console.error('Error creating menu category:', error);
      setError(error);
      onError(error);
    }
  };

  return (
    <>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="new-category" className='mb-3'>
          <Form.Label className='mb-3'>
            <strong>Ajouter une catégorie</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez un nom de catégorie ici..."
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}

          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </>
  );
}
