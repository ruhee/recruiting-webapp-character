import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';
import { AttributeControl } from './AttributeControl';
import { ClassRow } from './ClassRow';
import { SkillsList } from './SkillsList';

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
  const [validClasses, setValidClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [attributes, dispatch] = useReducer(attributeReducer, initialAttributeState);
  
  useEffect(() => {
    validateCharClasses();
  }, [attributes]);

  const handleIncrement = (attribute) => {
    dispatch({
      type: "INCREMENT",
      attribute,
    });
  }

  const handleDecrement = (attribute) => {
    dispatch({
      type: "DECREMENT",
      attribute,
    });
  }

  const validateCharClasses = () => {
    const validClasses = Object.keys(CLASS_LIST).map((charClass) => {
      const validations = attributes.map((attribute) => {
        return attribute.value >= CLASS_LIST[charClass][attribute.name]
      });

      if (validations.every((v) => v === true)) {
        return charClass;
      }
    });

     setValidClasses(validClasses);
  }

  const handleSetSelectedClass = (selection) => {
    if (selectedClass === selection) {
      setSelectedClass(null);
    } else {
      setSelectedClass(selection);
    }
  }

  const calculateModifier = (value) => {
    return Math.floor((value - 10)/2);
  }

  const calculateSkillPoints = () => {
    const intelligenceValue = attributes.filter((attr) => attr.name === 'Intelligence')[0].value
    const intelligenceModifier = calculateModifier(intelligenceValue);

    return Math.max((10 + (4 * intelligenceModifier)), 0);
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
                calculateModifier={calculateModifier}
                handleIncrement={() => handleIncrement(attribute.name)}
                handleDecrement={() => handleDecrement(attribute.name)} 
              />
            )
          })
        }
        <div>
          <h3>Classes</h3>
          {
            Object.keys(CLASS_LIST).map((charClass) => (
              <ClassRow
                key={charClass}
                charClass={charClass}
                fulfilled={validClasses.includes(charClass)} 
                setSelectedClass={handleSetSelectedClass}
              />
            ))
          }
        </div>
        {selectedClass && (<div>
          <h3>{selectedClass} Requirements</h3>
          <ul>
            {Object.keys(CLASS_LIST[selectedClass]).map((item) => (
              <li>{item}: {CLASS_LIST[selectedClass][item]}</li>
            )
            )}
          </ul>
        </div>)}
        <SkillsList points={calculateSkillPoints()}/>
      </section>
    </div>
  );
}

export default App;
