import React from 'react'
import { InputArea } from '../styled-components/Styled'
import Input from './Input'
import { Form } from '../styled-components/Styled'
import {LinkC, LinkCA} from './LinkC'
import InputCPF from './Input'

export default function Login (props){


    return(
        
    <Form>
        <h1>{props.tittle}</h1>

                <InputArea> 
                    <label> CPF</label>
                    <InputCPF/>
                </InputArea>
                
                <InputArea> 
                    <label> {props.inp} </label>
                    <input type={props.type} name="senha"/>                
                </InputArea>


        <button type="submit">{props.open}</button>

        <LinkC esq={props.esq} lk={props.lk}/>

        <div className="line"/>

        <LinkCA ca={props.ca} lk={props.lk}/>

    </Form>
    )
}
