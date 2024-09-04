import './todoItem.css';
import { useState } from 'react';

const CorrectItem = ({ item, correctFunc, setKey }) => {
  const [text, setText] = useState(item.text);

  return (
    <div className="todo-item-correct">
      <input
        type="text"
        className="todo-item-correct-input"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <button
        className="todo-item-correct-btn"
        onClick={() => correctFunc(text, item.id)}
      >
        Save
      </button>
      <button
        className="todo-item-correct-btn"
        onClick={() => setKey('correct', item.id)}
      >
        Cancel
      </button>
    </div>
  );
};

export default CorrectItem;
