

class Voiture {

    constructor(marque, annee, option){
        this.marque = marque;
        this.annee = annee;
    }

    rajoutOption(nomOption){
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option : ${this.option}`);
    }
    dateSortie(){
        console.log('Date de sortie de cette voiture ${this.annee}');
    }

}

const voiture1 = new Voiture('Ferrari', 2015, 'Rouge');
console.log(voiture1);

function Personnage(nom, taille) {
    this.nom = nom;
    this.taille =taille;
    // this.avancer = function(){
    //     console.log(`${this.nom} avanc ...`);
    // }
}

Personnage.prototype.avancer = function(){
    console.log(`$${this.nom}avance ...`);
}

const perso1 = new Personnage('Raspoutine', 190);
const perso2 = new Personnage('Cesar', 175);

perso1.avancer();

console.log(perso1, perso2);

// class Moto extends Voiture{

//     assurance(){
//     console.log("Vous avez pris une assurance !");
//    }
// }


// console.log([1,2,3].pop());


// const moto1 = new Moto('Suzuki', 2012, 'verte');
// moto1.assurance();

// const voiture2 = new voiture('Toyota', 2012);
// const voiture3 = new voiture('Peugeot', 2011);

// voiture1.dateSortie();
// voiture1.dateSortie();
// voiture1.dateSortie();
// // console.log(voiture1, voiture2, voiture3);

// console.log(voiture1);



// let str = new String('abc');
// console.log(str);

// let nvDate = new Date();
// console.log(nvDate);

// let regex = new RegExp(/abc/, 'g');
// console.log(regex);


// const voiture = {
//     marque : 'Ford',
//     annee : 2009,
//     couleur : 'Blanche',
//     rouler(){
//         console.log(this.annee);
//     }
// }

// console.log(Object.keys(voiture));



// console.log(Object.values(voiture));

// console.log(voiture.hasOwnProperty('marque'));


// const carre = n => n * n;
// const returnType = n => typeof n;

// const manipuleData = (val, carre, type) => {

//     let valFinale;

//     valFinale = carre(val);

//     return `Valeur finale ${valFinale} et c'est un type : ${type(val)}`;
// }

// console.log(manipuleData(4, carre, returnType));


// const tabNumbers = [0,1,2,3,4,5,6,7,8,9,10];
// let tableauParis = [];

// for(let i = 0; i < tabNumbers.length; i++) {
//     if(tabNumbers[i] % 2 === 0){
//         tableauParis.push(tabNumbers[i]);
//     }
// }
// console.log(tableauParis);

// const tabNumbers = [0,1,2,3,4,5,6,7,8,9,10];
// const checkPair = n => n % 2 === 0;
// console.log(tabNumbers.filter(checkPair));



// let compteur = 1;

// function incrCompteur(val){
//     compteur = compteur + val;
// }
// incrCompteur(1);
// console.log(compteur);

// function incrCompteurPure(val){
//     return compteur + val;
// }
// console.log(incrCompteurPure(1));
// // 2
// console.log(compteur);

// function auCarre(n) {
//     return n * n;
// }
// console.log(auCarre(4));
