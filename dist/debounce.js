export function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        console.log("Busqueda en curso");
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}
