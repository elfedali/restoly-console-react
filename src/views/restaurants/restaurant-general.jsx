import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import RestaurantService from '../../services/RestaurantService';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function RestaurantGeneral() {
    const notify = () => toast("Wow so easy!");
    const [restaurant, setRestaurant] = useState({
        title: '',
        content: '',
        excerpt: '',
        phone: '',
        phone_secondary: '',
        phone_tertiary: '',
        address: '',
        status: 'published',
        review_status: 'open',
        website: '',
        facebook: '',
        instagram: '',
        twitter: '',
        youtube: '',
        tiktok: '',
        reservation_required: 'not_required',
    });
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await RestaurantService.getRestaurantById(id);
                setRestaurant(response);
            } catch (error) {
                console.error('Error fetching restaurant:', error);
            }
        };

        fetchRestaurant();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRestaurant(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await RestaurantService.updateRestaurant(id, restaurant).then(response => {

                toast.success('Restaurant mis à jour avec succès');
            });
            // Optionally, you can redirect the user to another page after successful submission
            // history.push('/success');
        } catch (error) {
            toast.error('Erreur lors de la mise à jour du restaurant');
            console.error('Error updating restaurant:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                <Row>

                    <Col>
                        <Card className='bg-white'>
                            <Card.Body >
                                {/* start */}
                                <Form.Group controlId="field-title" className='mb-4'>
                                    <Form.Label>Nom du restaurant * </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nom du restaurant"
                                        value={restaurant.title}
                                        name='title'
                                        onChange={handleChange}

                                    />
                                </Form.Group>
                                <Form.Group controlId="field-description" className='mb-4'>
                                    <Form.Label>Description du restaurant *</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={10}
                                        placeholder="Description du restaurant"
                                        value={restaurant.content}
                                        name='content'
                                        onChange={handleChange}

                                    />
                                </Form.Group>
                                {/* excerpt */}
                                <Form.Group controlId="field-excerpt" className='mb-4'>
                                    <Form.Label>Extrait de la description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3} placeholder="Extrait de la description"
                                        value={restaurant.excerpt}
                                        name='excerpt'
                                        onChange={handleChange}
                                    />
                                    {/* help */}
                                    <Form.Text className="text-muted small">
                                        Cet extrait sera utilisé pour les moteurs de recherche aussi pour les réseaux sociaux et les résultats de recherche.
                                    </Form.Text>
                                </Form.Group>
                                {/* TODO:: !! */}
                                <CuisineTags />
                                <ServiceTags />
                                <AmbianceTags />

                                <Form.Group controlId="field-reservation-notice" className='mb-4'>
                                    <Form.Label>Votre restaurant peut-il recevoir sans réservation par téléphone ?*</Form.Label>
                                    {/* radio Oui Non */}
                                    <Form.Check
                                        key="oui"
                                        type="radio"
                                        label="Oui"
                                        name="reservation_required"
                                        id="field-reservation-required1"
                                        checked={restaurant.reservation_required === 'required'}
                                        value='required'

                                        onChange={handleChange}

                                    />
                                    <Form.Check
                                        key="non"
                                        type="radio"
                                        label="Non"
                                        name="reservation_required"
                                        id="field-reservation-required2"
                                        checked={restaurant.reservation_required === 'not_required'}
                                        value='not_required'
                                        onChange={handleChange}

                                    />
                                </Form.Group>
                                <hr />
                                <Row>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>Téléphone 1</Form.Label>
                                            <Form.Control type="text" placeholder="Téléphone 1"
                                                value={restaurant.phone}
                                                name='phone'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>Téléphone 2</Form.Label>
                                            <Form.Control type="text" placeholder="Téléphone 2"
                                                value={restaurant.phone_secondary}
                                                name='phone_secondary'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>Téléphone 3</Form.Label>
                                            <Form.Control type="text" placeholder="Téléphone 3"
                                                value={restaurant.phone_tertiary}
                                                name='phone_tertiary'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="field-" className='mb-4'>
                                    <Form.Label>Adresse du restaurant *</Form.Label>
                                    <Form.Control type="text" placeholder="Adresse"
                                        value={restaurant.address}
                                        name='address'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>Ville</Form.Label>
                                            <Form.Control type="text" placeholder="Ville" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>
                                                Quartier
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Quartier" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="field-" className='mb-4'>
                                            <Form.Label>
                                                Pays
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Pays" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {/* status */}
                                {/* draft or published */}
                                <Form.Group controlId="field-status" className='mb-4'>
                                    <Form.Label>Statut</Form.Label>
                                    <Form.Control as="select"
                                        name='status'
                                        onChange={handleChange}
                                    >
                                        <option
                                            selected={restaurant.status === 'published'}


                                        >Publié</option>
                                        <option
                                            selected={restaurant.status === 'draft'}
                                        >Brouillon</option>
                                    </Form.Control>
                                    {/* help */}
                                    <Form.Text className="text-muted small">
                                        Le statut <span className='fw-bold'>publié</span> rendra votre restaurant visible sur le site.
                                    </Form.Text>
                                </Form.Group>
                                {/* review_status */}
                                {/* open or closed */}
                                <Form.Group controlId="field-review_status" className='mb-4'>
                                    <Form.Label>Statut des avis</Form.Label>
                                    <Form.Control as="select"
                                        name='review_status'
                                        onChange={handleChange}
                                    >
                                        <option
                                            selected={restaurant.review_status === 'open'}
                                            value="open"
                                            key="open"
                                        >Ouvert</option>
                                        <option
                                            selected={restaurant.review_status === 'closed'}
                                            value="closed"
                                            key="closed"
                                        >Fermé</option>
                                    </Form.Control>
                                    {/* help */}
                                    <Form.Text className="text-muted small">
                                        Le statut ouvert permettra aux utilisateurs de laisser des avis.
                                    </Form.Text>
                                </Form.Group>


                            </Card.Body>
                        </Card>
                        {/* end */}
                    </Col>
                    <Col md={4}>
                        {/* start 2 */}
                        <Card className='bg-white'>
                            <Card.Body >
                                <Form.Group controlId="field-siteweb" className='mb-4'>
                                    <Form.Label>Site web</Form.Label>
                                    <Form.Control type="text" placeholder="Site web"

                                        value={restaurant.website}
                                        name='website'
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="field-facebook" className='mb-4'>
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control type="text" placeholder="Facebook"
                                        value={restaurant.facebook}
                                        name='facebook'
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="field-instagram" className='mb-4'>
                                    <Form.Label>Instagram</Form.Label>
                                    <Form.Control type="text" placeholder="Instagram"
                                        value={restaurant.instagram}
                                        name='instagram'
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="field-twitter" className='mb-4'>
                                    <Form.Label>Twitter</Form.Label>
                                    <Form.Control type="text" placeholder="Twitter"
                                        value={restaurant.twitter}
                                        name='twitter'
                                        onChange={handleChange}
                                    />
                                </Form.Group>



                                <Form.Group controlId="field-youtube" className='mb-4'>
                                    <Form.Label>Youtube</Form.Label>
                                    <Form.Control type="text" placeholder="Youtube"
                                        value={restaurant.youtube}
                                        name='youtube'
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                {/* tiktok */}
                                <Form.Group controlId="field-tiktok" className='mb-4'>
                                    <Form.Label>Tiktok</Form.Label>
                                    <Form.Control type="text" placeholder="Tiktok"
                                        value={restaurant.tiktok}
                                        name='tiktok'
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                {/* <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Google My Business</Form.Label>
                                <Form.Control type="text" placeholder="Google My Business"
                                    value={restaurant.google_my_business}
                                />
                            </Form.Group>

                            <Form.Group controlId="field-" className='mb-4'>
                                <Form.Label>Google Maps</Form.Label>
                                <Form.Control type="text" placeholder="Google Maps"
                                    value={restaurant.google_maps}
                                />
                            </Form.Group> */}
                            </Card.Body>
                        </Card>
                        {/* end 2 */}

                    </Col>
                </Row>

                {/* button  */}
                <Row>
                    <Col>
                        <button className='btn btn-primary mt-4'
                            type="submit"
                        >Mettre à jour </button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}







function AmbianceTags() {
    return (
        <Form.Group controlId="field-" className='mb-4'>
            <Form.Label>Ambiance</Form.Label>
            <Form.Control type="text" placeholder="Ambiance" />
        </Form.Group>
    )
}

function ServiceTags() {
    return (
        <Form.Group controlId="field-" className='mb-4'>
            <Form.Label>Service</Form.Label>
            <Form.Control type="text" placeholder="Service" />
        </Form.Group>
    )
}

function CuisineTags() {
    return (
        <Form.Group controlId="field-cusines" className='mb-4'>
            <Form.Label>Cuisine</Form.Label>
            <Form.Control type="text" placeholder="Cuisine" />
        </Form.Group>
    )
}
