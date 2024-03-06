import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Aside from "../components/aside";
import { Container, Row, Col } from "react-bootstrap";

export default function Root() {
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col lg={2} md={3} sm={4} xs={12} className="sidebar bg-white">
                        <Aside />
                    </Col>
                    <Col>
                        <Outlet />
                        <div className="p-5"></div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}
