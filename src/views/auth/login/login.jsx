import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import http from '../../../services/api';
import { useAuth } from '../../../hooks/useAuth';

export default function Login() {
    const [email, setEmail] = useState('webmaster@leo.ma');
    const [password, setPassword] = useState('password');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        getCSRFCookie();
    }, []);

    async function getCSRFCookie() {
        await http.get('/sanctum/csrf-cookie');
    }

    async function handleLogin(e) {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(email, password); // Using the login function from useAuth hook
            navigate('/');
        } catch (error) {
            console.error(error);
            setError('Identifiants incorrects. Veuillez réessayer.');
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
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
