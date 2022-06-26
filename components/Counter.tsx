import {useState} from "react";

export default function Counter({initial = 0, increments = 1}) {
    const [count, setCount] = useState(initial);

    function handleIncrement() {
        setCount(_count => _count + increments)
    }

    function handleDecrement() {
        setCount(_count => _count - increments)
    }

    return <div className="flex divide-x border rounded-lg">
        <button
            className="duration-150 p-8 hover:bg-gray-800 rounded-l-lg"
            onClick={handleDecrement}
        >
            -
        </button>
        <span className="py-8 px-16 font-mono">{count}</span>
        <button
            className="duration-150 p-8 hover:bg-gray-800 rounded-r-lg"
            onClick={handleIncrement}
        >
            +
        </button>
    </div>
}
