import React from 'react';

const getSystemPreferredTheme = () => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (isDarkTheme.matches) {
        return 'dark';
    }

    return 'light';
}

export const ThemeContext = React.createContext({
    theme: localStorage.getItem('theme') ?? 'dark',
    toggleTheme: () => {}
});