// The purpose of this file it to create a function that changes the background color. Creating this before localstorage due to relative easiness...

import { useEffect } from 'react';
// I know I will need local storage in a hot sec, so creating it now...
import useLocalStorage from './useLocalStorage';

// remember to spell const correctly... caused a nasty hickup in initial draft.
const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
    useEffect (() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);
    return [darkMode, setDarkMode];
};

export default useDarkMode;