import { useState, useRef, useEffect } from "react";

const App:React.FC = () => {
    const [hidden, setHidden] = useState(false)
    const sumRef = useRef(0)  //記憶當前的狀態，讓它橫跨渲染，不受渲染影響
    // let sum = 0

    function clickFun(){
        sumRef.current = sumRef.current + 1
        console.log('sumRef.current', sumRef.current)

        if(sumRef.current > 5){
            setHidden(true)
        }
        if(sumRef.current > 15) {
            setHidden(false)
        }
    }

    const element = useRef<HTMLHeadingElement>(null)
    
    useEffect(() => {
        // const element = document.getElementById('h1')
        // console.log(element)
        console.log(element.current)
    },[])


    return <>
        {/* <h1 id="h1">Ref</h1> */}
        <h1 ref={element}>Ref</h1>
        <button onClick={clickFun}>+1</button>
        { hidden && <div>顯示這行</div>}
    </>
}
export default App