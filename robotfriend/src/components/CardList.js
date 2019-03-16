import React from 'react';
import Card from './Card.js';
// import {robots} from './robots';

const CardList = ({robots}) => {
    if (true){
        throw new Error('Noooooah!');
    }
    return(
        <div>
            {robots.map((users,i) => {
                return (<Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                />)
                })
            };
        </div>
    );
}

export default CardList;