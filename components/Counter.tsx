import {useState} from "react";

export default function Counter({initial = 0, increments = 1}) {
    const [count, setCount] = useState(initial);

    function handleIncrement() {
        setCount(_count => _count + increments)
    }

    function handleDecrement() {
        setCount(_count => _count - increments)
    }

    return <div className="flex divide-x border divide-gray-700 border-gray-700 font-mono rounded-lg">
        <button
            className="duration-150 p-8 text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-l-lg"
            onClick={handleDecrement}
            data-test="decrement"
        >
            -
        </button>
        <span
            className="py-8 px-16 text-gray-100"
            data-test="count"
        >
            {count}
        </span>
        <button
            className="duration-150 p-8 text-gray-300 hover:text-gray-100 hover:bg-gray-800 rounded-r-lg"
            onClick={handleIncrement}
            data-test="increment"
        >
            +
        </button>
    </div>
}
