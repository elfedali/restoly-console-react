import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Aside from "../components/aside";
import { Container, Row, Col } from "react-bootstrap";

export default function Root() {
    return (
        <>

            {/* <Header /> */}
            <main className="d-flex layout layout-nav-side">


                <Aside />


                <section className="main-container">
                    <div className="p-4">
                        <Outlet />
                    </div>
                    <div className="p-5"></div>
                </section>


            </main>


        </>
    )
}
