import { Box } from "@mui/material";
import { useEffect, useState } from "react";
const Snake = () => {
    const [mcPos, setMCPos] = useState({ col: 10, row: 10, nextmove:'' });
    const snakeBoardTile = {
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid ",
    };
    const snakeBoard = new Array(20).fill(new Array(20).fill(0));
    let interval;

    const moveSnake = (event) => {
        switch (event.key) {
            case "w":
            case "ArrowUp":
                // if(mcPos.row > 1){
                //     setMCPos({...mcPos,row: mcPos.row-1});
                // }
                setMCPos({ ...mcPos, nextmove: "w" });
                break;
            case "d":
            case "ArrowRight":
                // if(mcPos.col<snakeBoard.length){
                //     setMCPos({...mcPos,col: mcPos.col+1});
                // }
                setMCPos({ ...mcPos, nextmove: "d" });
                break;
            case "s":
            case "ArrowDown":
                // if(mcPos.row<snakeBoard.length){
                //     setMCPos({...mcPos,row: mcPos.row + 1});
                // }
                setMCPos({ ...mcPos, nextmove: "s" });

                break;
            case "a":
            case "ArrowLeft":
                // if(mcPos.col>1){
                //     setMCPos({...mcPos,col: mcPos.col - 1});
                // }
                setMCPos({ ...mcPos, nextmove: "a" });
                break;
            default:
                console.log("wrong key");
        }
    };

    const snakePaint = () => {
        const boxArr = document.getElementsByClassName("box");
        for (let el of boxArr) {
            if (el.id == `row:${mcPos.row},col:${mcPos.col}`)
                el.classList.add("green");
            else el.classList.remove("green");
        }
        document
            .getElementById(`row:${mcPos.row},col:${mcPos.col}`)
            .classList.add("green");
    };

    useEffect(() => {
        window.addEventListener("keydown", moveSnake, true);
        interval = setInterval(() => {
            switch (mcPos.nextmove) {
                case "w":
                    setMCPos({ ...mcPos, row: mcPos.row - 1 });
                    break;
                case "d":
                    setMCPos({ ...mcPos, col: mcPos.col + 1 });
                    break;
                case "s":
                    setMCPos({ ...mcPos, row: mcPos.row + 1 });
                    break;
                case "a":
                    setMCPos({ ...mcPos, col: mcPos.col - 1 });
                    break;
                default:
                    console.log("wrong key");
            }
        }, 60);
        snakePaint();
        console.log(mcPos);
        return () => {
            window.removeEventListener("keydown", moveSnake, true);
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
                        >
                            {j + 1}
                        </Box>
                    ))}
                </span>
            ))}
        </div>
    );
};
export default Snake;
