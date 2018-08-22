// import React, { Component } from "react";
import React from "react";
// class Ninja extends Component {
//   render() {
const Ninja = props => {
  const { ninja } = props;
  const myninjas = ninja.map(ninjas => {
    // if (ninjas.age > 20) {
    //   return (
    //     <div>
    //       <div key={ninjas.id}>
    //         <h1>Name : {ninjas.name}</h1>
    //         <h1> Age : {ninjas.age}</h1>
    //         <h1>Belt : {ninjas.Hobby}</h1>
    //       </div>
    //     </div>
    //   );
    // }
    return ninjas.age > 20 ? (
      <div key={ninjas.id}>
        <h1>Name : {ninjas.name}</h1>
        <h1> Age : {ninjas.age}</h1>
        <h1>Belt : {ninjas.Hobby}</h1>
      </div>
    ) : null;
  });
  return <div>{myninjas}</div>;
};
export default Ninja;
