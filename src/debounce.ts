export function debounce<T extends Function>(func: T, delay: number){
  let timer: NodeJS.Timeout;
  return function(this: any,...args: any[]){
    clearTimeout(timer);
    console.log("Busqueda en curso");
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}