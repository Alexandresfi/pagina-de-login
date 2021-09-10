import React from "react";
import { Link } from 'react-router-dom'

export  function LinkC (props){
    return(
        <Link to={props.lk} className="link"> {props.esq} </Link>
    )
}

export function LinkCA (props) {

    return(
        <Link to={props.lk} className="end">{props.ca}</Link>
    )
}

