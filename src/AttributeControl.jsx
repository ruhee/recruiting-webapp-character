import React from 'react';

export const AttributeControl = ({ attribute, calculateModifier, handleIncrement, handleDecrement }) => {
    return (<div>
       {attribute.name}: {attribute.value} (Modifier: {calculateModifier(attribute.value)})
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>)
}
