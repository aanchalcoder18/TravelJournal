import React from "react";

function Card(props){
    return(
        <div>
            <div className="card">
                <img 
                    src={`../images/${props.imageURL}`}
                    className="card-image" 
                />
                <div className="card-overview">
                    <div className="card-title">
                        <p>{props.location}</p>
                        <p className="card-url">View On Google Maps</p>
                        {/* <script src={props.googleMapsUrl}> </script> need to fix */}
                    </div>
                    <h2>{props.title}</h2>
                    <div className="card-description">
                        <h5>{props.startDate} - {props.endDate}</h5>
                        <p>{props.description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card;