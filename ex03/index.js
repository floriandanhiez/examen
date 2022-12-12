class Chien {
  constructor() {
    this.img=("https://dog.ceo/api/breeds/image/random/")
  }
  
};




  
  

const chiens=[];
for (let i=0; i<3; i++) {
  chiens.push(new Chien());
  
}
console.log(chiens);
document.getElementById("result").src= chiens.message
console.log(chiens.message)

//Utilisez l'API "https://dog.ceo/api/breeds/image/random" pour récupérer 3 images de chiens aléatoires et les afficher dans la balise 'result'.