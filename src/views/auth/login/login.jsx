
import React, { useState, useEffect } from 'react'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import http from '../../../services/api'
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('webmaster@leo.ma');
    const [password, setPassword] = useState('password');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)//'26|FTxiiNJpj59Enw3jC278OTUC3HzQbrjhyTntwARC311faec9');

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {

        await http.get('/sanctum/csrf-cookie');
        await http.post('/login', {
            email: 'webmaster@leo.ma',
            password: 'password'
        });
        const user = await http.get('/api/user');
        console.log(user);

    }
    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {

            const response = await http.post('/login', {
                email,
                password

            });
            console.log(response.data);
            setUser(response.data.user);
            setToken(response.data.token);
            // Handle successful login, e.g., redirect user
        } catch (error) {
            console.error('An unexpected error happened:', error);
            setError('Identifiants incorrects. Veuillez réessayer.');
        }

        setLoading(false);
        // send sanctom token to get user

    }

    async function getPosts() {
        let { data } = await http.get("/api/posts");
        console.log(data);
    }
    // create a post
    async function createPost() {
        let { data } = await http.post("/api/posts", {
            title: "My first post",
            content: "This is my first post",
        });
        console.log(data);
    }
    async function WhoAmI() {
        let { data } = await http.get("/api/user");
        setUser(data);
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <button onClick={getPosts}>Get Posts</button>
                    <button onClick={createPost}>Create Post</button>
                    <button onClick={WhoAmI}>Who Am I</button>

                    <h1>Restoly</h1>
                    <h5>Bienvenue de retour!</h5>
                    <p className='text-muted'>
                        Connectez-vous pour continuer.
                    </p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Adresse Email</Form.Label>
                            <Form.Control type="email" placeholder="Entrez votre adresse email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? 'Chargement...' : 'Se connecter'}
                        </Button>
                    </Form>
                    {/* links */}
                    <div className="w-100 mt-3">
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
