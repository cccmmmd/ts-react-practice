import React, {useState, useRef, useEffect} from "react";

const App: React.FC = () => {
    const [accountV, setAccountV] = useState("")
    const [passwordV, setpasswordV] = useState("")

    function accountHandler(event:React.FormEvent<HTMLInputElement>){
        if(event.currentTarget) {
            // console.log(event.currentTarget.value)
            setAccountV(event.currentTarget.value)
        }
    }

    function passwordHandler(event:React.FormEvent<HTMLInputElement>){
        if(event.currentTarget) {
            // console.log(event.currentTarget.value)
            setpasswordV(event.currentTarget.value)
        }
    }

    return <>
        <h1>Form</h1>
        <p>Account</p>
        <input type="text" name="" value={accountV} id="account" onChange={accountHandler}></input>
        <p>輸入帳號：{accountV}</p>
        <p>password</p>
        <input type="password" name="" value={passwordV} id="password" onChange={passwordHandler}></input>
        <p>輸入密碼：{passwordV}</p>
        <div>
            <button>login</button>
        </div>
    </>
}

export default App