import React, { useState } from "react";
import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import Home from "pages/home/Home";
import "app.scss";

const App = () => {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const handleToggleSidebar = () => {
        setIsToggleSidebar(!isToggleSidebar);
    };
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app_container border border-info">
                <Sidebar isToggleSidebar={isToggleSidebar} />
                <Container fluid className="app_main border border-warning">
                    <Home />
                </Container>
            </div>
        </>
    );
};

export default App;
