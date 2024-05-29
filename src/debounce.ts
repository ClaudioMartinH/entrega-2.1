export function debounce<T extends Function>(func: T, delay: number){
  let timer: NodeJS.Timeout;
  return function(this: any,...args: any[]){
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }
}