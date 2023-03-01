import {useContext , createContext , useState} from "react";

const  ThemaContext = createContext();

export const ThemaProvider = ({children}) =>{

    const [thema , setThema] = useState();

    const changeThema = () =>{
        setThema((prevState) => prevState === "light" ? "dark" : "light");
    }

    return <ThemaContext.Provider value={{thema,changeThema}}>{children}</ThemaContext.Provider>
}

export const useThema = () => useContext(ThemaContext)