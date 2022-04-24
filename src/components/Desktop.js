import {React, useState} from 'react';

export default function Desktop(props) {
        const [count, setCount] = useState(0);

        function increaseCount(e) {
            setCount(count+parseInt(e.target.value) )
            // setCount(count+1);
        }
        
    return (
        <>
            <div>
                <h4>Couter value: ${count}</h4>
                <button onClick={(e)=>increaseCount(e)} value={5}>Increse 1</button>
                <button onClick={(e)=>increaseCount(e)} value={2}>Increse 2</button>
                <button onClick={(e)=>increaseCount(e)} value={3}>Increse 3</button>
                {/* <button onClick={increaseCount} value={2}>Increse 2</button>
                <button onClick={increaseCount} value={3}>Increse 3</button>    */}
            </div>
        </>
    )
}