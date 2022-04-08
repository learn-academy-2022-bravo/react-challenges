import React, { Component } from 'react'

export default class BadRobot extends React.Component {

  // robotBad = (string) => {
  //  let blahArray = ["B","L","A","H"];
  //   let newValue = string.length - 1
  //   if(newValue > 3) {
  //   return string.replace(string[newValue], blahArray[newValue])
  // } else {
  //  return string.replace(string[newValue], blahArray[newValue])
  // }
  //   return string.replace(string[0],blahArray[0])
  //   .replace(string[1],blahArray[1])
  //   .replace(string[2],blahArray[2])
  //   .replace(string[3],blahArray[3])
  //   .replace(string[4],blahArray[4])
  // }
// const robotBad = (array) => {
//   let blahArray = []
//   for (let i = 0; i < array.length; i++) {
//     blahArray.pushblahArray(array[i])
//   }
// }
  render() {
    return (
      <>

      <p>I am the Bad Robot: {this.robotBad(this.props.userInput)}</p>

      </>
    )
  }
}
// robotBad = (string) => {
//     let blahArray = ["B","L","A","H"]
