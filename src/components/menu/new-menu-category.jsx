import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import RestaurantService from '../../services/RestaurantService';
import { ToastContainer, toast } from 'react-toastify';

export default function NewMenuCategory({ restaurantId, onSuccess, onError }) {
  const [categoryName, setCategoryName] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const newCategory = await RestaurantService.createMenuCategory(restaurantId, { title: categoryName });
      setCategoryName('');
      onSuccess(newCategory);
      setLoading(false);
      toast.success(`Catégorie "${newCategory.data.title}" ajoutée avec succès`);
    } catch (error) {
      console.error('Error creating menu category:', error);
      setError(error);
      onError(error);
      setLoading(false);
    }

  };

  return (
    <>
      <ToastContainer />
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
            required

          />
        </Form.Group>
        <div className="d-flex">
          <Button variant="primary" type="submit">
            Ajouter
          </Button>
          {/* loading */}
          {loading && <div className="spinner-border text-dark ms-3" role="status">
            <span className="visually-hidden">En cours...</span>
          </div>}
        </div>
      </Form>
    </>
  );
}
