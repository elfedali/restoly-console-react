import React from 'react'
import Auth from "../layouts/auth";
import Login from "../views/auth/login/login";
import Register from "../views/auth/register/register";
import { Route, Routes } from "react-router-dom";

export default function AuthStack() {
    return (
        <Routes>
            <Route element={<Auth />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    )
}
