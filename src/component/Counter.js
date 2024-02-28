import {useRecoilState} from "recoil";
import {counterState} from "./atoms";
import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useRecoilState(counterState);
    const [count1, setCount1] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const increment1 = () => {
        setCount1(count1 + 1);
    }

    const decrement1 = () => {
        setCount1(count1 - 1);
    }

    return (
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={increment}>recoil Increment</button>
                <button onClick={decrement}>recoil Decrement</button>
            </div>
            <div>
                <p>Count1: {count1}</p>
                <button onClick={increment1}>state Increment</button>
                <button onClick={decrement1}>state Decrement</button>
            </div>
        </>
    )
}