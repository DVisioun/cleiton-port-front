import dynamic from "next/dynamic";
import React, { createContext, useEffect, useState } from "react";

const getInitialTheme = () => {
    if(typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        console.log(storedPrefs);
        if(typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia =  window.matchMedia('(prefers-color-scheme: dark)');
        if(userMedia.matches) {
            return 'dark';
        }
    }

    return 'light';
};

export const ThemeContext = createContext();

const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme == 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    }

    if (initialTheme){
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{ theme, setTheme }} >
            { children }
        </ThemeContext.Provider>
    );
};

export default dynamic(() => Promise.resolve(ThemeProvider), { ssr: false });