import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function Auth() {
    return (
        <div className="auth-wrapper vh-100">


            <Container>
                <Row>
                    <Col lg={6} className="m-auto pt-4">
                        <Outlet />
                    </Col>
                </Row>

            </Container>

        </div >
    )
}
