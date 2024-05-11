import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

type BtnProps = {
  currentNum: number,
  onClickHandler: () => void
}

const Btn: React.FC<BtnProps> = ({currentNum, onClickHandler}) => {

  return <>
    <button onClick={onClickHandler}>+1</button><br/>
    <span>Total Count: {currentNum}</span>
  </>
}

const App:React.FC = () => {
  const [num, setNum] = useState(0)

  function clickHandler() {
    setNum(num +1)
  }
 
  return <>
    <Header/>
    總計數：{num}
    <h1 className='color-blue'>計時器</h1>
    <Btn currentNum={num} onClickHandler={clickHandler}/>
  </>
}
  

export default App;
