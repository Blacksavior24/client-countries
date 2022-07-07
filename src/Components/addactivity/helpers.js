export default function validater (obj, setError, err){
    let { name , season, difficulty, duration, idCountry} = obj
    console.log(name)
    if (idCountry.length === 0){
       return "warning: select a countrie"
    }
     if (name ===  ""){
       return  "warning: name has to be a full"
     }
     if( season ===  ""){
      return  "warning: select a season"
     }
     if(difficulty === "")
    return   "warning: select a difficulty"     
 if(duration < 1){
     return  "warning: duration has to be positive"
 }
 
 } 
 