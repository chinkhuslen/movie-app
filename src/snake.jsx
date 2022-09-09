import { Box, Grid } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

let initialState =  
  [
    { col: 10, row: 20, nextmove: '' }, 
    { col: 10, row: 21, nextmove: '' },
    { col: 10, row: 22, nextmove: '' },
    { col: 10, row: 23, nextmove: '' },
    { col: 10, row: 24, nextmove: '' },
  ];
  const snakeBoardTile = {
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: ".1px solid grey",
  };

const Snake = () => {

  const [mcPos, setMCPos] = useState({ col: 10, row: 20, nextmove: "" });
  const snakeBoard = new Array(25).fill(new Array(25).fill(0));
  let interval;

  const moveSnakeHead = (event) => {
    switch (event.key) {
      case "w":
      case "ArrowUp":
        setMCPos({ ...mcPos, nextmove: "w" });
        break;
      case "d":
      case "ArrowRight":
        setMCPos({ ...mcPos, nextmove: "d" });
        break;
      case "s":
      case "ArrowDown":
        setMCPos({ ...mcPos, nextmove: "s" });
        break;
      case "a":
      case "ArrowLeft":
        setMCPos({ ...mcPos, nextmove: "a" });
        break;
      default:
        console.log("wrong key");
    }
  };
  const snakePaint = () => {
    resetPaint();
    initialState.forEach(el=>{
      document
        .getElementById(`row:${el.row},col:${el.col}`)
        .classList.add("green");
    })
  };

  const resetPaint = () => {
    const boxArr = document.getElementsByClassName("box");
    for (let el of boxArr) {
      el.classList.remove("green");
    }
  };


  const updatePosition = () => {
    switch (mcPos.nextmove) {
      case "w":
        if (mcPos.row > 1) {
          setMCPos({ ...mcPos, row: mcPos.row - 1 });
        }
        break;
      case "d":
        if (mcPos.col < snakeBoard.length) {
          setMCPos({ ...mcPos, col: mcPos.col + 1 });
        }
        break;
      case "s":
        if (mcPos.row < snakeBoard.length) {
          setMCPos({ ...mcPos, row: mcPos.row + 1 });
        }
        break;
      case "a":
        if (mcPos.col > 1) {
          setMCPos({ ...mcPos, col: mcPos.col - 1 });
        }
        break;
      default:
        console.log("wrong key");
        return;
    }
    
  }
  const updateInitialState = () =>{
    if(mcPos.col != initialState[0].col || mcPos.row != initialState[0].row){
      let snakeSwap = {...mcPos};
      let data = initialState.map((el,i)=>{
        let temp;
        temp = {...snakeSwap};
        snakeSwap={...el};
        return {...temp};
      })
      initialState = [...data];

    }
    snakePaint();
  }
  
  
  useEffect(() => {
    interval = setInterval(updatePosition, 100);
    window.addEventListener("keydown", moveSnakeHead, true);
    updateInitialState();
    return () => {
      window.removeEventListener("keydown", moveSnakeHead, true);
      clearInterval(interval);
    };
  }, [mcPos]);

  return (
    <div id="snakeWrapper">
      {snakeBoard.map((el, i) => (
        <span style={{ display: "flex" }}>
          {el.map((el2, j) => (
            <Box
              className="box"
              id={`row:${i + 1},col:${j + 1}`}
              sx={snakeBoardTile}
              nextmove=""
            >{j+1}</Box>
          ))}
        </span>
      ))}
    </div>
  );
};
export default Snake;
