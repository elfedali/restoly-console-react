import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h1>
                        Restoly
                    </h1>
                    <h5>Bienvenu de retour!

                    </h5>
                    <p className='text-muted'>
                        Connectez-vous pour continuer.
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Se connecter
                        </Button>
                    </Form>

                    {/* links */}
                    <div className="w-100  mt-3">
                        <a href="#/forgot-password">Mot de passe oublié?</a>
                    </div>
                    <div className="w-100 mt-2">
                        Vous n'avez pas de compte? <Link to="/auth/register">S'inscrire</Link>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}
