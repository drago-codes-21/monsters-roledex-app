import React from 'react'
import "./cardlist.css"
import { Card } from './Card';

export const Cardlist=(props)=> 
    (
        <div className="cards">
          {props.monsters.map((monster) => (
            <Card key={monster.id} monster={monster}/>
          ))}
        </div>
    );
