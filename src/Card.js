import React from "react";

function Card (props) {
    return (<li className="card">
    <img className="card-img-top" src={props.imgUrl}/>
    <div className="card-body">
    <h3 className="card-title">{props.id}. {props.name}</h3>
    <button className="btn btn-danger">Learn More</button>
    </div>
    </li>);
}

export default Card;