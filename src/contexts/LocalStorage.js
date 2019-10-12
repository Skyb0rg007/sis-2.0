import React, { useState, useEffect } from 'react';

export const useLocalStorage = (key, init = null) => {
    console.assert(typeof key === 'string');
    const [value, setValue] = useState(
        localStorage.getItem(key) || init
    );

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value]);

    return [value, setValue];
}