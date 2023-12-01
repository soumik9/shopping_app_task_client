import classNames from 'classnames';

export const cx = classNames;

export const setOnLocalStorage = (key, data) => {
    localStorage.setItem(key, data);
}

export const getFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}