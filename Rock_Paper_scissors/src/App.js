import React ,{ useEffect, useState } from "react";

import Game from "./components/Game";
import Choice from "./components/choice";
import Result from "./components/Result";
import Question from './assests/images/Confuess.png'
import scissors from './assests/images/scissors.png';
import rock from './assests/images/rock.png';
import paper from './assests/images/paper.png';


function App() {

let [userchoice,setUserChoice]=useState("");
let  [robotchoose,setrobotchoose]=useState("");
let  [ShowResult,SetShowResult]=useState(2);
let [UserPoint,SetUserPoint]=useState(0);
let [RobotPoint,SetRobotPoint]=useState(0);



let imageSymbol={
    Rock:rock,
    Paper:paper,
    Scissors:scissors
};
let c=0;
let keyvalues=['Rock','Paper','Scissors'];


for (const key in imageSymbol) {
  if (imageSymbol[key] === userchoice) {
    c = 1;
      break;
}
}

let s=0;
const onChoiceMade=(e)=>{
  setUserChoice(e);
  s=Math.random()* 3;
  s=Math.floor(s);
  setrobotchoose([keyvalues[s]]); 
  // console.log("RObot CHoice"+keyvalues[s]);
}
let userchoiceValue="USER";

for(let i in imageSymbol){
  if(imageSymbol[i]===userchoice){
    userchoiceValue=i;
    break;
  }
}
console.log("USER "+userchoiceValue);
console.log(userchoiceValue);

const FinalResult=(userchoiceValue,robotchoose)=>{
  if(userchoiceValue==="USER"){
    SetShowResult(0);
    SetUserPoint(0);
    SetRobotPoint(0);
  }
  else if(userchoiceValue==="Rock" && robotchoose==="Scissors" ){
    SetShowResult(1);
    SetUserPoint(UserPoint+1);
    SetRobotPoint(RobotPoint);
  }
  else if(userchoiceValue==="Rock" && robotchoose==="Paper" ){
    SetShowResult(-1);
    SetUserPoint(UserPoint);
    SetRobotPoint(RobotPoint+1);
  }
  else if(userchoiceValue==="Scissors" && robotchoose==="Paper" ){
    SetShowResult(1);
    SetUserPoint(UserPoint+1);
    SetRobotPoint(RobotPoint);
  }
  else if(userchoiceValue==="Scissors" && robotchoose==="Rock" ){
    SetShowResult(-1);
    SetUserPoint(UserPoint);
    SetRobotPoint(RobotPoint+1);
  }
  else if(userchoiceValue==="Paper" && robotchoose==="Rock" ){
    SetShowResult(1);
    SetUserPoint(UserPoint+1);
    SetRobotPoint(RobotPoint);
  }
  else if(userchoiceValue==="Paper" && robotchoose==="Scissors" ){
    SetShowResult(-1);
    SetUserPoint(UserPoint);
    SetRobotPoint(RobotPoint+1);
  }
  else if(userchoiceValue==robotchoose){
    SetShowResult(0);
  }
  
  else{
    SetShowResult("Play Again");
  }
}
useEffect(()=>{
  // if(userchoiceValue)
  if(RobotPoint===6||UserPoint===6 ){
    alert((UserPoint===6)?"YOU WIN":"YOU LOOSE")
    SetShowResult(0);
    userchoiceValue="USER";
    robotchoose="";
    SetUserPoint(UserPoint-UserPoint);
    SetRobotPoint(RobotPoint-RobotPoint);
  }
  FinalResult(userchoiceValue,robotchoose[0]) 
},[userchoice,robotchoose])

return (
    <div>
      <h1 className="text-[#fdea4e]  float-right m-3">You need 7 Points to WIN🥳</h1>
      <Game  UserPoint={UserPoint} RobotPoint={RobotPoint} />   
      {
        (c===1)?<Result imagepass={userchoice} resultannounce={ShowResult} robotpass={imageSymbol[robotchoose]} />:<Result resultannounce={ShowResult} imagepass={Question}  robotpass={Question} />
    }
      <Choice  onChoiceMade={onChoiceMade}  imageSymbol={imageSymbol} />
    </div>
  );
}


export default App;
