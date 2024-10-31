import { useState, createContext, useContext } from 'react'

const MyContext = createContext()

export const useMyContext = () => {
    return useContext(MyContext)
}

export const MyContextProvider = ({ children }) => {
    const [data, setData] = useState('')
    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )
}
