import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Instructor = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="mt-5">Our honourable Instructors</h1>
            <div className="d-flex m-4">
                <div>
                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card className="card-body">
                                <Card.Img variant="top" src="https://template.hasthemes.com/judo/judo/img/trainer/trainer.png" />
                                <Card.Body>
                                    <Card.Title>Mr.Fu</Card.Title>
                                    <Card.Text>
                                        Mr.Fu is the teacher of Tai-ji-Chuan. He got many international awards. He is certified trainer  recognised by Chinese Tai-ji-chuan Association.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
                <div>
                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://template.hasthemes.com/judo/judo/img/trainer/trainer2.jpg" />
                                <Card.Body>
                                    <Card.Title>Fa ming</Card.Title>
                                    <Card.Text>
                                        Mr.Faming is the teacher of Taewkondo. He got many awards. He is Black Balted.He got World Taewondo Fadaration(WTF) award.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
                <div>
                    <Row xs={1} md={2} className="g-4">

                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://template.hasthemes.com/judo/judo/img/trainer/trainer3.jpg" />
                                <Card.Body>
                                    <Card.Title>Li Huan</Card.Title>
                                    <Card.Text>
                                        Li Huan is the Master of Chinese Kong Fu. He got many international awards. He is trained by chinese shawling kongfu master.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Instructor;