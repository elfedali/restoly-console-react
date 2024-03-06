import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h1>
                        Restoly
                    </h1>
                    <h5>
                        Creer un compte

                    </h5>
                    <p className='text-muted'>
                        Remplissez le formulaire pour creer un compte.
                    </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                Address email
                            </Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                Mot de passe
                            </Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        {/* firstName */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                Prénom
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        {/* lastName */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                Nom
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        {/* phone */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>
                                Numéro de téléphone
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>

                        <Button variant="success" type="submit" >
                            Creez votre compte
                        </Button>
                    </Form>

                    {/* links */}
                    <div className="w-100  mt-3">
                        <a href="#/forgot-password">Mot de passe oublié?</a>
                    </div>
                    <div className="w-100 mt-2">
                        Vous avez deja un compte? <Link to="/auth/login">Se connecter</Link>
                    </div>
                    <hr />
                    {/* terms and service */}
                    <div className="w-100 mt-2 small">
                        En continuant, vous acceptez les <a href="#/terms">Conditions d'utilisation</a> et la <a href="#/privacy">Politique de confidentialité</a> de Restoly
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}
