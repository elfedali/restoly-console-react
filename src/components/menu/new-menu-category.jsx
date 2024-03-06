
import React from 'react'
import { Form } from 'react-bootstrap'

export default function NewMenuCategory() {
  return (
    <>
      <Form>
        <Form.Group controlId="new-category" className='mb-3'>
          <Form.Label className='mb-3'>
            <strong>
              Ajouter une catégorie
            </strong>
          </Form.Label>
          <Form.Control type="text" placeholder="Entrez un nom de catégorie ici..." />
        </Form.Group>
        {/* ajouter */}
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>

      </Form>
    </>
  )
}
