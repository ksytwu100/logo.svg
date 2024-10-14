const { Circle, Triangle, Square } = require("./shapes");

describe("Circle Class", () => {
  test("Should generate correct SVG string or a circle"),
    () => {
      const circle = new Circle("green", "white", "SVG");
      const svgstring = circle.createCircle();
      const expectedsvg = `                              
         <svg width="300" height="200">                   
           <circle cx="50" cy="50" r="40" stroke="green" stroke-width="3" fill="green" />
           <text x="50" y="55" font-size="16" text-anchor="middle" fill="white">SVG</text>
         </svg>
          `;
      expect(svgstring.toBe(expectedsvg));
    };
});

