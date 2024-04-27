import React, { useContext, useState } from 'react';
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { Context } from "../index";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 54px)" }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : "Реєстрація"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введіть ваш email..." value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control className="mt-3" placeholder="Введіть ваш пароль..." value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйтеся!</NavLink></div>
                        ) : (
                            <div>Є акаунт? <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink></div>
                        )}
                        <Button variant="outline-success" onClick={handleClick}>
                            {isLogin ? 'Увійти' : 'Реєстрація'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
