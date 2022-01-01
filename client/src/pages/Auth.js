import React, {useState, useContext} from 'react'
import {Container, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import { NavLink, useLocation, useHistory} from 'react-router-dom'
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {registration, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);

            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } 
        catch (e) {
            alert(e.response.data.message)
        }
    }


    return(
        <Container
        style={{height: window.innerHeight - 54, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        
        >
            <Card style={{width: 600, padding: 12}}>
                <h2 style = {{margin: 'auto'}}>{isLogin ? 'Авторизація': "Реєстрація"}</h2>
                <Form style = {{display: 'flex', flexDirection: 'column'}}>
                <Form.Control
                    style={{marginTop: 30}}
                    placeholder="Введіть ваш email..."
                    value = {email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    style={{marginTop: 20}}
                    placeholder="Введіть ваш пароль..."
                    value = {password}
                      onChange={e => setPassword(e.target.value)}
                    type = "password"
                    />
                    
                <Row style = {{display: 'flex', justifyContent: 'between', marginTop: 8, paddingLeft: 20, paddingRight: 20}}>
                {isLogin ? <div>Немає облікового запису? <NavLink to = {REGISTRATION_ROUTE}>Зареєструйся!</NavLink></div> :
                <div>Є обліковий запис? <NavLink to = {LOGIN_ROUTE}>Увійдіть!</NavLink> </div>}
                <Button variant={"outline-success"} style = {{marginTop: 13, width: 150, marginLeft: 8}} onClick = {click}>
                     {isLogin ? 'Увійти' : 'Реєстрація'}
                </Button>
                </Row>
                </Form>
            </Card>
        </Container>
    )
});

export default Auth
