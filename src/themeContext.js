import React from 'react';

const getSystemPreferredTheme = () => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    return isDarkTheme.matches ? 'dark' : 'light';
}

const getInitialTheme = () => {
    try {
        return localStorage.getItem('theme') ?? getSystemPreferredTheme();
    } catch (error) {
        console.error("Failed to get theme from localStorage", error);
        return getSystemPreferredTheme();
    }
}

export const ThemeContext = React.createContext({
    theme: getInitialTheme(),
    toggleTheme: () => {}
});
