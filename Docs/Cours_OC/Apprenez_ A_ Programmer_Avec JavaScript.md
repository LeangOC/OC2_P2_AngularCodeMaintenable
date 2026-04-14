
# Apprenez à programmer avec JavaScript :
( https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript)

## Partie 3 :
## 1. Récupérez un élément d'une page web

## 2. Modifiez un élément d'une page

## 3. Créer un nouvel élément dans une page web
  - Méthode permettant de créer n'importe quelle balise  : CreateElement()
  >  let nouvelElement = document.createElement("div");
  - Insertion une balise ou ajouter un enfant : appendChild() 
  >// Récupérer un élément parent existant  
  let parentElement = document.getElementById("conteneur");    
  // Ajouter le nouvel élément au parent  
  parentElement.appendChild(nouvelElement);  
- Utilisez l’interpolation pour générer du HTML     

- Insérez votre HTML grâce à innerHTML
> let body = document.querySelector("body")  
> body.innerHTML = div
