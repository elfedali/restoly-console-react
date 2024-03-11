import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import RestaurantService from '../../services/RestaurantService';
import MenuList from '../../components/menu/menu-list';
import NewMenuCategory from '../../components/menu/new-menu-category';


export default function RestaurantMenu() {
    const [menuCategories, setMenuCategories] = useState();
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch initial menu categories
        fetchMenuCategories();
    }, []);

    const fetchMenuCategories = async () => {
        try {
            const categories = await RestaurantService.getMenuCategoriesByRestaurantId(id);
            setMenuCategories(categories);
            console.log('categories', categories);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleNewMenuCategorySuccess = (newCategory) => {
        setMenuCategories([...menuCategories, newCategory]);
        setError(null);
    };

    const handleNewMenuCategoryError = (error) => {
        setError(error.message);
    };

    return (
        <>
            {error && <p>Error: {error}</p>}
            <Card className='bg-white mb-4'>
                <Card.Body>
                    <NewMenuCategory
                        restaurantId={id}
                        onSuccess={handleNewMenuCategorySuccess}
                        onError={handleNewMenuCategoryError}
                    />
                </Card.Body>
            </Card>

            <MenuList
                restaurantId={id}
                menuCategories={menuCategories}
                setMenuCategories={setMenuCategories}
            />
        </>
    );
}
