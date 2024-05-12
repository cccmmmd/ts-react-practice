import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';

type BtnProps = {
  currentNum: number,
  onClickHandler: () => void
}
const Appstyle1 = {
  color: 'green'
}
const Appstyle2 = {
  color: 'black'
}

const Button = styled.button<{ $primary?: boolean; }>`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

const Btn: React.FC<BtnProps> = ({currentNum, onClickHandler}) => {

  return <>
    <button onClick={onClickHandler}>+1</button><br/>
    <span>Total Count: {currentNum}</span>
  </>
}

  const App:React.FC = () => {
    const [num, setNum] = useState(0)
    const appsty = false
    function clickHandler() {
      setNum(num +1)
    }
 
  return <>
    <Header/>
    總計數：{num}
    <h1 style={ appsty ? Appstyle1: Appstyle2}>顏色測試</h1>
    <h1>Styled component 試做</h1>
    <Button $primary={false}>Normal</Button>
    <h1 className='color-blue'>計時器</h1>
    <Btn currentNum={num} onClickHandler={clickHandler}/>
  </>
}
  

export default App;
