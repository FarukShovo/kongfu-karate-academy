import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
    const [services, setServices] = useState([])
    const url = "data2.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div>
                {
                    services.map(service => <div className="card-container">
                        <Row xs={1} md={2} className="g-4 ">

                            <Col>
                                <Card >
                                    <Card.Img variant="top" src={service.img} />
                                    <Card.Body>
                                        <Card.Title>{service.courseName}</Card.Title>
                                        <Card.Text>
                                            <p>Course Duration: {service.courseDuration}
                                            </p>
                                            <p>Course Fee: {service.courseFee}</p>
                                            <p>Time: {service.time}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;