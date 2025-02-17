/**
 * <div id="parent">
 *   <div id="child">
 *        <h1> I'm h1 tag </h1>
 *         <h2> I'm h2 tag </h2>
 *     </div>
 * 
 *   
 *   
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

 const parent = React.createElement("div",
      {id:"parent"},React.createElement("div",
      {id:"child"},React.createElement("h1",{},"Iam an H1 tag")));



console.log(parent);


// For 2 children convert it into array


const parent1 = React.createElement("div",
      {id:"parent"},React.createElement("div",
      {id:"child"},[React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"Iam an h2 tag")]));

/** 
<div id="parent">
 *   <div id="child">
 *        <h1> I'm h1 tag </h1>
 *         <h2> I'm h2 tag </h2>
 *     </div>
 * 
 *   <div id="child">
 *        <h1> I'm h1 tag </h1>
 *         <h2> I'm h2 tag </h2>
 *     </div>
 *   
 * </div>
 */

 // For above case

 const parent2 = React.createElement("div",{id:"parent"},[
       React.createElement("div",{id:"child"},[
       React.createElement("h1",{},"h1 tag"),
       React.createElement("h2",{},"h2 tag")
       ]),

       
       React.createElement("div",{id:"child2"},[
           React.createElement("h1",{},"Iam h1 tag"),
           React.createElement("h2",{},"I'm an h2 tag")
       ]),
    ]);

//JSX




//const heading = React.createElement("h1",{id:"heading"},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);