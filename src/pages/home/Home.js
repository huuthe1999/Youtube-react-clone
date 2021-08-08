import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryBar from "components/categoryBar/CategoryBar";
import Video from "components/video/Video";

const Home = () => {
    return (
        <Container>
            <CategoryBar />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4}>
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
