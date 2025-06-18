//Init 
setPos(300,300);
changeColor(color.blue);
faceDown();
setLineWidth(1);

/* //Exercice A1:
forward(200);
faceRight(90);
forward(100);
//OK
 */

/* //Exercice A2:
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200); 
//OK
*/

/* //Exercice A3:
faceLeft();
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);
//OK */

/* //Exercice A4:
faceRight();
forward(100);
arcLeft(50,180);
faceLeft();
forward(50);
arcRight(50,180);
forward(100);
faceLeft();
//OK */

/* //Exercice 5:
changeColor(color.blue);
faceRight();
arcRight(100,180);
changeColor(color.red);
arcRight(100,180);
arcRight(50,180);
changeColor(color.blue);
arcLeft(50,180);
//OK */

/* //Exercice 6:
faceUp();
forward(50);
up();
forward(50);
down();
forward(100);
//OK */

/* //Exercice 7:
faceDown();
forward(50);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);
//A peu près OK */

/* //Exercice B1:
for(let i = 0; i < 4; i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}
//OK */

/* //Exercice B2:
for(let i = 0; i < 4; i++){
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}
//OK
 */

/* //Exercice B3:
for(let i = 0; i < 4; i++){
    forward(100);
    right(90);
} 
//OK    
*/

/* //Exercice B4:
for(let i = 0; i < 3; i++){
    forward(50);
    left(180-60);
}
//OK
 */

/* //Exercice 5:
changeColor(color.green);
faceUp();
forward(50); */

/* //Exercice C1:
faceRight();
let x = 0;
    for(let i= 0; i < 4; i++){
        for(let j = 0; j < 3; j++){
            forward(50);
            right(180-60);
        }
    forward(50);
}
//OK */

/* for(let i= 0; i < 4; i++){
    for(let j = 0; j < 3; j++){
        forward(50);
        right(180-60);
    }
    forward(50);
}
 */


//Exercice E1:
function drawStar(size){
    faceRight();
    for(let i = 0; i < 8; i++){
        forward(size);
        right(180-45);
    }
    faceRight();
}

drawStar(50);
forward(100);
drawStar(50);
forward(150);
drawStar(50);

