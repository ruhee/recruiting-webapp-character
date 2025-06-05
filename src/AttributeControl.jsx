import React from 'react';

export const AttributeControl = ({ attribute, handleIncrement, handleDecrement }) => {
    return (<div>
       {attribute.name}: {attribute.value} 
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>)
}
