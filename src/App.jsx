import { useReducer, useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import { AttributeControl } from './AttributeControl';

const initialAttributeState = ATTRIBUTE_LIST.map((attribute) => {
  return {
    name: attribute,
    value: 0,
  }
})

const attributeReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": 
      return state.map((attr) => {
        if (attr.name === action.attribute) {
          return {
            ...attr,
            value: attr.value++
          }
        } else {
          return attr;
        }
      });
      break;
    case "DECREMENT": 
      return state.map((attr) => {
        if (attr.name === action.attribute) {
          return {
            ...attr,
            value: attr.value--
          }
        } else {
          return attr;
        }
      });
      break;
    default:
      console.log("🚨 Unexpected action");
  }
}



function App() {
  const [num, setNum] = useState(0);
  const [attributes, dispatch] = useReducer(attributeReducer, initialAttributeState);

  const handleIncrement = (attribute) => {
    dispatch({
      type: "INCREMENT",
      attribute,
    })
  }

  const handleDecrement = (attribute) => {
    dispatch({
      type: "DECREMENT",
      attribute,
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise: Ruhee Dewji ✨</h1>
      </header>
      <section className="App-section">
        {
          attributes.map((attribute) => {
            return (
              <AttributeControl
                key={attribute.name}
                attribute={attribute}
                handleIncrement={() => handleIncrement(attribute.name)}
                handleDecrement={() => handleDecrement(attribute.name)} 
              />
            )
          })
        }
        <div>
          Value:
          {num}
          <button onClick={() => handleIncrement('Strength')}>+</button>
          <button onClick={() => handleDecrement('Strength')}>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
