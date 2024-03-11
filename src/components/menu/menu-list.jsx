import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import Dish from './dish';
import RestaurantService from '../../services/RestaurantService';

export default function MenuList(
  { restaurantId, menuCategories, setMenuCategories }
) {

  const removeCategory = async (categoryId) => {
    //  confirm before deleting
    if (!window.confirm('Etes-vous sûr de vouloir supprimer cette catégorie?')) {
      return;
    }



    try {
      await RestaurantService.removeMenuCategory(restaurantId, categoryId);
      setMenuCategories(menuCategories.filter(category => category.id !== categoryId));
    } catch (error) {
      console.error('Error removing category:', error);
      // Handle error if necessary
    }
  }


  if (!menuCategories) {
    return <p>
      Chargement des catégories de menu
    </p>;
  }
  return (
    <>

      {menuCategories.map((category, index) => (
        <Card key={index} className='mb-4'>
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{category.title}</strong>
              </div>
              <div>
                {/* supprimer button */}
                <Button variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    removeCategory(category.id);
                  }}
                >
                  Supprimer la categorie
                </Button>
              </div>
            </div>

          </Card.Header>
          <Card.Body>
            {/* <EmptyMenuList /> */}
            <ListDishes />



          </Card.Body>
          <Card.Footer>
            <AddNewDish />

          </Card.Footer>
        </Card>
      ))}
    </>
  )
}

function EmptyMenuList() {
  return (
    <div className="text-center">
      <p className='text-muted small'>
        Aucun plat dans cette catégorie
      </p>
      <Button variant="primary">
        Ajouter un nouveau plat
      </Button>
    </div>
  )
}

function ListDishes() {
  return (
    <>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Salade Marocaine</Accordion.Header>
          <Accordion.Body>
            <Dish />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Tajine Marocain</Accordion.Header>
          <Accordion.Body>
            <Dish />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </>
  );
}

function AddNewDish() {
  return (
    <div className="text-start">
      <Button variant="outline-primary" size="sm">
        + Ajouter un nouveau plat
      </Button>
    </div>
  )
}



