import { Link, Outlet } from "react-router-dom";

export default function Auth() {
    return (
        <>
            <h1>Auth</h1>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/register">Register</Link>
            <div>
                <Outlet />
            </div>
        </>
    )
}
