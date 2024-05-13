import { useEffect, useState } from "react";

let interval:any = null
let num = 0
const App: React.FC = () => {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('偶數')


    useEffect(() => {
        interval = setInterval(() => {
            num ++
            console.log(num)
        }, 1000)
        //callback 在下一次渲染前執行 reset interval
        return () => {
            if( interval !== null) {
                clearInterval(interval)
                num = 0
            }
        }
    },[counter])

    useEffect(() => {
        if(counter % 2 === 0){
            setText('偶數')
        }else {
            setText('基數')
        }
    }, [counter])

    
    const handleClick = () => {
        setCounter(counter + 1)
    }

    return <>
        <h1>Count: {counter}</h1>
        <button onClick={handleClick}>{counter}</button>
        <p>{text}</p>
    </>
}

export default App