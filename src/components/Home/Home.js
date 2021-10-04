import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Home.css"

const Home = () => {
    const [services, setServices] = useState([])
    const url = "data1.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <h2 className="bg-primary mt-5">Our Services:</h2>
            <div className="card-container">
                {
                    services.map(service => <div>
                        <Row xs={1} md={3} className="g-2 content-center">

                            <Card className="card w-50">
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>Course Name: {service.courseName}</Card.Title>
                                    <Card.Text>
                                        <p>Course Duration: {service.courseDuration}
                                        </p>
                                        <p>Course Fee: {service.courseFee}</p>
                                        <p>Time: {service.time}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Row>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;