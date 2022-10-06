import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState('');
    // const [colorSettings, setColorSettings] = useState('')
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('');
    

    useEffect(() => {
        setCurrentMode(localStorage.getItem('themeMode'))
    }, [])

   
    

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(localStorage.getItem(setCurrentMode))
    };

    const setColor = (mode) => {
        setCurrentColor(mode);
        // setColorSettings(mode)
        localStorage.setItem('colorMode', mode);

    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                themeSettings,
                setThemeSettings,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                setMode,
                setColor,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);