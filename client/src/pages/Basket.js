import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { fetchCart } from '../http/CartAPI';

const Basket = () => {
    const [cart, setCart] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const loadCart = async () => {
            try {
                const data = await fetchCart();
                setCart(data);
            } catch (error) {
                console.error('Помилка завантаження кошика:', error);
            }
        };

        loadCart();
    }, []);

    const handleCheckout = () => {
        history.push('/checkout');
    };

    return (
        <Container className="mt-4">
            <h2>Кошик</h2>
            {cart.length === 0 ? (
                <p>Кошик порожній</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <Card key={item.id} className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col>{item.name}</Col>
                                    <Col>{item.price} грн.</Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button variant="primary" onClick={handleCheckout}>
                        Оформити замовлення
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Basket;

