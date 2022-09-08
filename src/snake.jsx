import {Box} from '@mui/material'
import { useEffect, useState } from 'react'
const Snake = () => {
    // const [mcPos,setMCPos] = useState({col:5,row:5});
    const [mcPos,setMCPos] = useState({col:5,row:5});
    const snakeBoardTile = {
        width:50,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        border:'1px solid '
    }
    const snakeBoard  = new Array(10).fill(new Array(10).fill(0));

    const moveSnake = (event) =>{
        switch (event.key){
            case 'w':
            case 'ArrowUp':
                if(mcPos.row > 1){
                    setMCPos({...mcPos,row: mcPos.row-1});
                }
                break;
            case 'd':
            case 'ArrowRight':
                if(mcPos.col<snakeBoard.length){
                    setMCPos({...mcPos,col: mcPos.col+1});
                }
                break;
            case 's':
            case'ArrowDown':
                if(mcPos.row<snakeBoard.length){
                    setMCPos({...mcPos,row: mcPos.row + 1});
                }
                break;
            case 'a':
            case'ArrowLeft':
                if(mcPos.col>1){
                    setMCPos({...mcPos,col: mcPos.col - 1});
                }
                break;
            default:
                console.log('wrong key');
        }
    }
    const snakePaint = () =>{
        const boxArr = document.getElementsByClassName('box');
        for(let el of boxArr){
            if(el.id == `row:${mcPos.row},col:${mcPos.col}`)
                el.classList.add('cyan')
            else
                el.classList.remove('cyan')
        }
    }
    useEffect(()=>{
        window.addEventListener('keydown',moveSnake,true);
        snakePaint();
        return ()=>{
            window.removeEventListener('keydown',moveSnake,true);
        }
    },[mcPos])

    return(
        <div id='snakeWrapper'>
            {snakeBoard.map((el,i) =>
            <span style={{display:'flex'}}>
                {el.map((el2,j) => 
                <Box className='box' id={`row:${i+1},col:${j+1}`} sx={snakeBoardTile} nextmove=''>{j+1}</Box>
                )}
            </span>
            )}
        </div>
    )
}
export default Snake