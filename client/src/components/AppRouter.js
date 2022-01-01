import React, {useContext} from 'react'
import {Switch , Route, Redirect} from 'react-router-dom'
import { AuthRoutes } from '../routes'
import {PublicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import { Context } from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return(
        <Switch>
            {user.isAuth && AuthRoutes.map(({path, Component})=>
            <Route key = {path} path = {path} component={Component} exact/>
            )}

            {PublicRoutes.map(({path, Component})=>
            <Route key = {path} path = {path} component={Component} exact/>
            )}
            <Redirect to ={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRouter