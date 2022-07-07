export  function  compareAZ(a, b)  {
    if (a.name > b.name) {
        return 1;
       
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
}
export function compareZA( a, b){
    if (a.name > b.name) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    return 0;
}
export function MayorPoblacion (a,b){
    if (a.poblation > b.poblation){
        return -1
    }
    if (a.poblation < b.poblation){
        return 1
    }
    return 0
}

export function MenorPoblacion (a,b){
    if (a.poblation > b.poblation){
        return 1
       }
       if (a.poblation < b.poblation){
           return -1
    }
    return 0
   
}
