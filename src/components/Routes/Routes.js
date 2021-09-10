import React from "react";
import { Route, Router, Switch } from "react-router";
import Header from "../Header";
import Login from "../login1";
export default function Routes (){

    return(
        <Switch>
            <Route exact path="/">
                <Header/>
                <Login tittle="Login" open="Entrar" esq="Esqueceu a senha?" cad="Cadastrar" inp="Senha" type="password" lk="/redefinir-senha" ca="Cadastro"/>
            </Route>

            <Route exact path="/redefinir-senha">
                <Header/>
                <Login tittle="Redefinir senha" open="Redefinir senha" esq="Cadastrar" cad="Fazer login" inp="data de Nascimento" type="date" ca="Fazer login" lk="/"/>
            </Route>
        
        
        </Switch>
    )
}