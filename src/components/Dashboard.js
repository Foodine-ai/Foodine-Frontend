import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Home from './Home';
import { useState } from 'react';
const Dashboard = () => {
    const [key, setKey] = useState('home');

    return (
        <div>
            <Tabs
                className="tab-prop"
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Home" >
                    <Home />
                </Tab>
                <Tab eventKey="dashboard" title="Dashboard">
                    <Container className="dashboard">
                        <Row className="space">
                            <Col className="compo-1">1 of 2</Col>
                            <Col className="compo-1">2 of 2</Col>
                            <Col className="compo-1">2 of 2</Col>
                        </Row>
                        <Row>
                            <Col className="compo-1">1 of 3</Col>
                            <Col className="compo-1">2 of 3</Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="login" title="Login">
                    <Home />
                </Tab>
                <button>LOGIN</button>
            </Tabs>
        </div>
    )
}

export default Dashboard;