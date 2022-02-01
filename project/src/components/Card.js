import React from "react";
import destination from "../images/destination.png";

function Card(props){
    return(
        <div>
            <div className="card">
                <img 
                    src={`${props.imageUrl}`}
                    className="card-image" 
                />
                <div className="card-overview">
                    <div className="card-title">
                        <img 
                            src={destination}
                            className="card-logo"
                        />
                        <p className="card-location">{props.location}</p>
                        <a 
                            href={props.googleMapsUrl}
                            className="card-url"    
                        >view on google maps</a>
                    </div>
                    <h2 className="card-tle">{props.title}</h2>
                    <div className="card-description">
                        <h5 className="card-date">{props.startDate} - {props.endDate}</h5>
                        <p id="card-des">{props.description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Card;