import React from 'react';
export const Country=(props)=>
{
    return(
            <div>
            {
                props.weather ? (props.weather.map((weather,index)=><li key={index}>{weather.description}</li>)):<p>NO WEATHER</p>
            }
            </div>
    );}
    
