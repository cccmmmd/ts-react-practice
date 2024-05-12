import { useState, useEffect } from "react"


function getCurrentScore() {
    return 100
  }

function getScoreByBoardName(boardName:String) {
    if (boardName === 'boardA') {
      return 200
    } 
    if (boardName === 'boardB') {
      return 1000
    } 
    return 0
  }


function useGetTotalScore(boardName: string){
    const [score, setScore] = useState(0)
    useEffect(()=>{
        const currentScore = getCurrentScore() + getScoreByBoardName(boardName)
        setScore(currentScore)
    },[])
    return score
}


const BoardB:React.FC = () => {
    // const [score, setScore] = useState(0)
    // useEffect(()=>{
    //     const currentScore = getCurrentScore() + getScoreByBoardName('boardB')
    //     setScore(currentScore)
    // },[])
    const score = useGetTotalScore('boardB')
    return <p>B Total Score: {score} </p>
}
const BoardA:React.FC = () => {
    // const [score, setScore] = useState(0)
    // useEffect(()=>{
    //     const currentScore = getCurrentScore() + getScoreByBoardName('boardA')
    //     setScore(currentScore)
    // },[])
    const score = useGetTotalScore('boardA')
    return <p>A Total Score: {score}</p>
}
const Hoc:React.FC = ()=>{
    return <>
    <BoardA/>
    <BoardB/>
    </>
}

export default Hoc