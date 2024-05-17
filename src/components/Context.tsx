import { useState } from "react"
import {ShowProvider, useShowContext} from './context/showContext'

type Props =  {
   
}

const D: React.FC<Props> = () => {
    const data = useShowContext()
    return <>
        <h2>D Component</h2>
        {
            data.btnVisable? <p>SHow Me</p>: <p>Oh no</p>
        }
 </>
}

const C: React.FC<Props> = () => {
    return <>
        <h2>C Component</h2>
        <D/>
    </>
}

const B: React.FC<Props> = ( ) => {
    return <>
        <h2>B Component</h2>
        <C />
    </>
}

const App: React.FC = () => {
    // const [btnVisable, setbtnVisable] = useState(true)
    return <ShowProvider>
            <h2>A Component</h2>
            <B/>
        </ShowProvider>
}

export default App