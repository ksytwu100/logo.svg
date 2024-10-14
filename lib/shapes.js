class Shape {
    constructor(shapeColor,textColor,text) {
     this.shapeColor = shapeColor;
     this.textColor = textColor; 
     this.text = text; 
  }
 }
  class Circle extends Shape {
     constructor(shapeColor, textColor,text) {
         super(shapeColor, textColor,text);
     }
     createCircle() {
         return `
         <svg  xmlns="http://www.w3.org/2000/svg" width="300" height="200">
           <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="${this.shapeColor}" />
           <text x="50" y="55" font-size="16" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>
          `;     
     }
 }
 class Triangle extends Shape {
     constructor(shapeColor, textColor,text) {
         super(shapeColor, textColor,text);
     }
     createTriangle() {
         return `
    <svg  xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="50,10 90,90 10,90" stroke="red" stroke-width="3" fill="${this.shapeColor}" />
        <text x="50" y="70" font-size="16" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>
     `;    
     }
 }
  class Square extends Shape {
     constructor(shapeColor, textColor,text) {
         super(shapeColor, textColor,text);
     }
     createSquare() {
         return `
         <svg  xmlns="http://www.w3.org/2000/svg" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             <rect width="100%" height="100%" fill="${this.shapeColor}" />
             <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
         </svg>
         `;
     }
 }
 module.exports = {Circle, Triangle, Square};