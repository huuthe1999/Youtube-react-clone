import React from "react";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import Home from "pages/home/Home";
import "app.scss";

const App = () => {
    return (
        <>
            <Header />
            <div className="app_container border border-info">
                <Sidebar />
                <Container fluid className="app_main border border-warning">
                    <Home />
                </Container>
            </div>
        </>
    );
};

export default App;
