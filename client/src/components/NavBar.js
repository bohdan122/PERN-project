import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom';



const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return(
        <Navbar bg="dark" variant="light">
            <Container>

            <NavLink to = {SHOP_ROUTE} style= {{color: 'white', marginTop: 5, textDecoration: 'none', fontSize: 20, marginBottom: 5}}><img
            src="https://www.pinclipart.com/picdir/big/201-2019042_bag-buy-mall-merchandise-purchase-shop-spree-merchandise.png"
            width="40"
            height="40"
            style = {{borderRadius: 10, marginRight: 30}}/>Shopping</NavLink>


           {user.isAuth ?  <Nav className="ml-auto" style={{color: 'white'}}>
                   <Button
                       variant={"outline-light"}
                       onClick={() => history.push(ADMIN_ROUTE)}
                   >
                       Адмін панель
                   </Button>
             <Button variant={"outline-light"} className ="ml-2"
                     style={{marginLeft: 10}}
                     onClick={() => logOut()}
             >Вийти</Button>
           </Nav>
          :
           <Nav className="ml-auto" style={{color: 'white'}}>
             <Button variant={"outline-light"} onClick= {() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
           </Nav>
           }
            </Container>
      </Navbar>
    )
});

export default NavBar
