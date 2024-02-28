import {useRecoilState} from "recoil";
import {todoListState} from "./atoms";
import {useState} from "react";

export default function TodoList() {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [todoListWithState, setTodoListWithState] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputValueWithState, setInputValueWithState] = useState('');


    const addItem = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue('');
    }

    const deleteItem = (e) => {
        if (todoList.includes(e)) {
            setTodoList(todoList.filter(item => item!== e));
        }
    };

    const addItemWithState = () => {
        setTodoListWithState([...todoListWithState, inputValueWithState]);
        setInputValueWithState('');
    }

    const deleteItemWithState = (e) => {
       if(todoListWithState.includes(e)) {
           setTodoListWithState(todoListWithState.filter(item => item!== e));
       }
    }

    return (
        <div>
            <h2>Recoil ToDo List</h2>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={() => deleteItem(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <h2>State ToDo List</h2>
            <ul>
                {todoListWithState.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={() => deleteItemWithState(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValueWithState}
                onChange={(e) => setInputValueWithState(e.target.value)}
            />
            <button onClick={addItemWithState}>Add Item</button>
        </div>
    )

}