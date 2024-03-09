import React from 'react'

import Root from "../layouts/default";
import Restaurants from "../views/restaurants/restaurants"
import RestaurantsBase from "../views/restaurants/restaurants-base";
import RestaurantGeneral from "../views/restaurants/restaurant-general";
import RestaurantMenu from "../views/restaurants/restaurant-menu";
import RestaurantPhotos from "../views/restaurants/restaurant-photos";
import RestaurantWorkingHours from "../views/restaurants/restaurant-working-hours";
import RestaurantAvis from "../views/restaurants/restaurant-avis";
import RestaurantSeo from "../views/restaurants/restaurant-seo";
import Experiences from "../views/experiences/experiences";
import Tables from "../views/tables/tables";
import Team from "../views/team/tables";


import { Route, Routes } from "react-router-dom";
import Dashboard from '../views/dashboard/dashboard';

export default function AppStack() {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/r/" element={<Restaurants />} />
                <Route path="/r/:id" element={<RestaurantsBase />}>
                    <Route path="/r/:id/" element={<RestaurantGeneral />} />
                    <Route path="/r/:id/menu" element={<RestaurantMenu />} />
                    <Route path="/r/:id/photos" element={<RestaurantPhotos />} />
                    <Route path="/r/:id/hours" element={<RestaurantWorkingHours />} />
                    <Route path="/r/:id/reviews" element={<RestaurantAvis />} />
                    <Route path="/r/:id/seo" element={<RestaurantSeo />} />
                </Route>
                <Route path="/ex" element={<Experiences />} />
                <Route path="/pt" element={<Tables />} />
                <Route path="/eq" element={<Team />} />
            </Route>
        </Routes>
    )
}
