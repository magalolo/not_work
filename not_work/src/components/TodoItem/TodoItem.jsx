import React from 'react';
import "./todoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleExclamation, faTrash, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons'; // Импортируйте необходимые иконки

const TodoItem = ({ item, setKey, status, deleteTodo }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          disabled={status === "trash"}
          onChange={() => {
            setKey("completed", item.id);
          }}
          checked={item.completed}
        />
        <p className="todo-item-text">{item.text}</p>
      </div>

      <div className="todo-item-right">
        {status !== "trash" ? (
          <>
            <button onClick={() => setKey('correct', item.id)}>
              <FontAwesomeIcon icon={faPen} /> {/* Используйте FontAwesomeIcon с импортированными иконками */}
            </button>

            <button
              className={item.important ? "important" : ""}
              onClick={() => setKey("important", item.id)}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
            </button> 
          </>
        ) : (
          <button onClick={() => deleteTodo(item.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}

        <button onClick={() => setKey("deleted", item.id)}>
          {status === "trash" ? (
            <FontAwesomeIcon icon={faTrashArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faTrash} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
