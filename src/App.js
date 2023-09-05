import React, {Component, Suspense} from 'react';
import Routes from './routes';
import {ThemeContext} from "./themeContext";
import style from './Theme.module.scss'

class RoutedApp extends Component {
  render() {
    return <>
      <Routes/>
    </>
  }
}

class Theme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: localStorage.getItem('theme') ?? this.getSystemPreferredTheme(),
      toggleTheme: this.toggleTheme,
    };


  }

  toggleTheme = () => {
      this.setState(state => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark'

        localStorage.setItem('theme', newTheme);

        return {
          theme: newTheme
        }
      });
    }

    getSystemPreferredTheme() {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (isDarkTheme.matches) {
      return 'dark';
    }

    return 'light';
  }

  render() {

    const classes = [style.Theme];

    if(this.state.theme === 'dark') {
      classes.push(style.Theme_dark);
    } else {
      classes.push(style.Theme_light)
    }

    return (
        <ThemeContext.Provider value={this.state}>
          <main className={classes.join(' ')} style={{ minHeight: "100vh" }}>
            <Suspense fallback="">
              <RoutedApp />
            </Suspense>
          </main>
        </ThemeContext.Provider>
    );
  }
}


export default function App() {
  return (
    <Theme/>
  );
}
