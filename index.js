//Change document background color to
//silver

document.body.style.backgroundColor = 'silver';
//Change the font color for h1 title tag to
//green
let  title = document.getElementById('title');
title.style.color = 'green';
//Change the font case for h3 title tags to
//uppercase
let h3 = document.getElementsByTagName('h3');
for (let i = 0; i < h3.length; i++) {
  h3[i].style.textTransform = 'uppercase';
}
//Add one more fruit to the fruits list
let fruList = document.getElementById('fruList');
let newFruit = document.createElement('li');
newFruit.textContent = 'Avocadoes';
fruList.appendChild(newFruit);
//Add one more vegetable to the vegetables
//list
let vegList = document.getElementById('vegList');
let newVegetable = document.createElement('li');
newVegetable.textContent = 'Brokoli';
vegList.appendChild(newVegetable);
