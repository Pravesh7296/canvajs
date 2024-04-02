window.addEventListener('load',createCircle);
window.addEventListener('load',createArrow);
function reset(){
        createCircle();
        createArrow();
}

function createCircle(){
    let circle = document.getElementById("circle");
   // Circle and Arrow size must be same
   circle.innerHTML='';
    for(let i=0;i<4;i++){
        let CircleDiv = document.createElement('div');
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src="images/arrow.jpg";
        img.style.display="none";
        div.style.backgroundColor=getRandomColor(i+1);
        CircleDiv.appendChild(div);
        CircleDiv.appendChild(img);
        circle.appendChild(CircleDiv);
    }
}

function createArrow(){
    let arrow = document.getElementById("arrow");
    // Circle and Arrow size must be same
    arrow.innerHTML='';
    for(let i=0;i<4;i++){
        let imageDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src="images/arrow.jpg";
        img.style.width="25%";
        img.addEventListener('click',function(){
            img.style.display="none";
           setArrow(i+1);

        });
        imageDiv.appendChild(img);
        arrow.appendChild(imageDiv);
    }
}



function setArrow(number){

    let circle = document.getElementById("circle");
    circle.innerHTML='';
    // Circle and Arrow size must be same
     for(let i=0;i<4;i++){

        
         let CircleDiv = document.createElement('div');
         let div = document.createElement('div');
         let img = document.createElement('img');
         img.src="images/arrow.jpg";
         img.style.display="none";
         div.style.backgroundColor=getRandomColor(i+1);
         
        
         if(i+1==number){
            img.style.display="block";
         }
         CircleDiv.appendChild(div);
         CircleDiv.appendChild(img);
         circle.appendChild(CircleDiv);
     }

     let arrow = document.getElementById("arrow");
     arrow.innerHTML='';
     // Circle and Arrow size must be same
     for(let i=0;i<4;i++){
         let imageDiv = document.createElement('div');
         let img = document.createElement('img');
         img.src="images/arrow.jpg";
         img.style.width="25%";
         img.addEventListener('click',function(){
             img.style.display="none";
            setArrow(i+1);
 
         });
         if(i+1==number){
            img.style.display="none";
         }
         imageDiv.appendChild(img);
         arrow.appendChild(imageDiv);
     }


}



function getRandomColor(number) {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random()* 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}
