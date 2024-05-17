import { useState, useMemo, useCallback, memo } from "react";


type PropsB = {
    num: number,
    obj: {name: string}
}

const B:React.FC<PropsB> = memo(({num, obj}) => {
    console.log('render B')
    return <p> B {num} {obj.name}</p>
})
const App: React.FC = () => {
    console.log('render A')
    const [value, setValue] = useState(false)
    const [num, setNum] = useState(0)
    const [obj, setObj] = useState({ name: ''})

    const memoObj = useMemo(()=> {
        console.log('obj')
        return obj
    }, [obj.name])

    return <>
        <h1>APP</h1>
        <B num={num}  obj={memoObj}  />
        <button onClick={() => {setValue(!value)}}>重新 render </button>
        <button onClick={() =>{ setNum(100)}}>重新 render </button>
        <button onClick={ ()=> {setObj({name: 'GGG'})}}>重新 render </button>
    </>
}


export default App