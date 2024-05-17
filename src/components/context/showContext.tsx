import React, {createContext, useState, useContext} from "react";

const defaultValue = {
    btnVisable: false
}

const ShowContext = createContext(defaultValue)

export const ShowProvider:React.FC<{children:any}> = ({children}) => {
    const [btnVisable, setbtnVisable] = useState(true)
    return <>
        <ShowContext.Provider value = {{btnVisable}}>
            {children}
        </ShowContext.Provider>
    </>

}
export const useShowContext = () => {
    return useContext(ShowContext)
}