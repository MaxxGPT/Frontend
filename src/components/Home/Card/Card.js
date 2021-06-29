import React from 'react';
import { Image } from 'react-bootstrap';
import '../home.css';
const Card = props => {
    return (
        <div className="machine-learning__cardContainer">
            <div style={{ margin: "auto" }}>
                <Image
                    src={props.image}
                    alt={props.title}
                    fluid
                    bsPrefix="machine-learning__"
                />
                <p className="machine-learning__cardTitle">{props.title}</p>
                <p className="machine-learning__cardDescription">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;