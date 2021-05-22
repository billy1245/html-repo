var etoil ="*"

var myStars = () => {for(i=0 ; i < 10; i++){
console.log(etoil.repeat(i))
  }
}

var tableau = [1,2,3,4,5]

tableau.map((e) => Array(e ).fill(false))

tableau.filter((e)=> e < 3);
tableauFiltree = [...tableau, ...tableau.filter((e)=> e < 3)]
 
tableauFiltree.reduce( (element , acc) => acc + element)

let goMycode = {
    calsse: [],
    creatClasse : (nom )=>{
        goMycode.calsse = [...goMycode.calsse ,nom]
    }
}
goMycode.creatClasse("billy")

// get the keys (indexs)
console.log(Object.keys(goMycode.calsse))




