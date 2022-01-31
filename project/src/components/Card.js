import React from "react";

function Card(props){
    return(
        <div>
            <div>
            <img 
                src={`../images/${props.imageURL}`} 
            />
            <p>{props.location}</p>
            {/* <script src={props.googleMapsUrl}> </script> need to fix */}
            <h2>{props.title}</h2>
            <h5>{props.startDate} - {props.endDate}</h5>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;