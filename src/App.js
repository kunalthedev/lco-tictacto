import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Icon from "./components/Icon";
// import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  // const [cardColor, setCardColor] = useState("warning")
  const [selected, setSelected] = useState("")

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0 ,9);
  };

  const checkIsWinner = () => {
    if (itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } 
    else  if (itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty") {
      setWinMessage(`${itemArray[5]} won`)
    } 
    else  if (itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty") {
      setWinMessage(`${itemArray[6]} won`)
    } 
    else  if (itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } 
    else  if (itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty") {
      setWinMessage(`${itemArray[1]} won`)
    } 
    else  if (itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} won`)
    } 
    else  if (itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty") {
      setWinMessage(`${itemArray[0]} won`)
    } 
    else  if (itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty") {
      setWinMessage(`${itemArray[2]} won`)
    } 
    else if(itemArray[0] !== "empty" &&
    itemArray[1] !== "empty" &&
    itemArray[2] !== "empty" &&
    itemArray[3] !== "empty" &&
    itemArray[4] !== "empty" &&
    itemArray[5] !== "empty" &&
    itemArray[6] !== "empty" &&
    itemArray[7] !== "empty" &&
    itemArray[8] !== "empty"){
      setWinMessage(`No One won`)
    }
  };

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage , {type:"success"})
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      setSelected(itemNumber)
      // if (selected==="circle") {
      //   setCardColor("primary")
      // } else  {
      //   setCardColor("success")
      // }
      
    }
    else{
      return toast("Already Filled", {type:"error"})
    }

    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div  className="mb-2 mt-2">
            <h1 className="text-success text-uppercase text-center">
              {winMessage} 
            </h1>
            <Button onClick={reloadGame} color="success" block className="mb-3">Reload Game</Button>
          </div>
        ) : (
          <h1 className="text-center text-success">
            {isCross? "Cross" : "Circle"} Turns
          </h1>
        )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index) } style={{
                
                  backgroundColor: selected === index ? "#26A042" : "#5bc0de",
                  color: selected ===index ? "white" : "red",
                  // backgroundColor: selected===index?{cardColor}: ""
                }}  >
                <CardBody className="box">
                  <Icon name={item} 
                  height="50px" width= "50px" />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
