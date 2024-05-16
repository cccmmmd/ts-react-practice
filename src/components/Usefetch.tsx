import { useState, useEffect } from "react";

type CommentType = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

function useFetchAPI () {
    const [postId, setId] = useState<number>(1)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([] as CommentType[])

    async function fetchData(id:number){
        setLoading(true)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            const data = await res.json() as CommentType[]
            setData(data)
        } catch (error) {
            setError(error as Error)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchData(postId)
        // fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        // .then(res => res.json())
        // .then((data:CommentType[]) => {
        //     console.log('data2', data)
        // })

    },[postId])

    return [data, loading, error, setId] as const
    // return {data, loading, error, postId}
}
const App:React.FC = () => {


    const [data, loading, error, setId] = useFetchAPI()
    // const {data, loading, error, postId} = useFetchAPI()
    
    const clickHandler = (id: number) => {
        setId(id)
    }
    return <>
        <h1>Fetch</h1>
        <button onClick={() => clickHandler(2)}>fetch id 2 data</button>
        <button onClick={() => clickHandler(3)}>fetch id 3 data</button>
        {
            error === null? <p style={{color:'green'}}>資料獲取成功</p>:<p style={{color:'red'}}>資料獲取失敗</p>
        }
        {
            loading? <h1>loading</h1>: null
        }
       <p>data resule:</p>
       {
         data.length > 0 && data.map (item => {
            return <p key={item.id}>{item.email}</p>
         })
       } 
    </>
}

export default App