import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import Dish from './dish';

export default function MenuList() {
  return (
    <>
      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <strong>
                Entrées
              </strong>
            </div>
            <div>
              {/* supprimer button */}
              <Button variant="outline-danger" >
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



