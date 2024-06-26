import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                await check();
                user.setUser(true);
                user.setIsAuth(true);
            } catch (error) {
                console.error('Помилка перевірки користувача:', error);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, [user]);

    return (
        <BrowserRouter>
            <NavBar />
            {loading ? <Spinner animation="grow" /> : <AppRouter />}
        </BrowserRouter>
    );
});

export default App;
