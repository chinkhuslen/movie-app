import {Box} from '@mui/material'
import { useEffect, useState } from 'react'
const Snake = () => {
    // const [mcPos,setMCPos] = useState({boxcol:5,boxrow:5});
    const [mcPos,setMCPos] = useState({boxcol:5,boxrow:5});
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
                if(mcPos.boxrow > 1){
                    setMCPos({...mcPos,boxrow: mcPos.boxrow-1});
                }
                break;
            case 'd':
            case 'ArrowRight':
                if(mcPos.boxcol<snakeBoard.length){
                    setMCPos({...mcPos,boxcol: mcPos.boxcol+1});
                }
                break;
            case 's':
            case'ArrowDown':
                if(mcPos.boxrow<snakeBoard.length){
                    setMCPos({...mcPos,boxrow: mcPos.boxrow + 1});
                }
                break;
            case 'a':
            case'ArrowLeft':
                if(mcPos.boxcol>1){
                    setMCPos({...mcPos,boxcol: mcPos.boxcol - 1});
                }
                break;
            default:
                console.log('wrong key');
        }
    }
    const snakePaint = () =>{
        const boxArr = document.getElementsByClassName('box');
        for(let el of boxArr){
            if(el.getAttribute("boxcol") == mcPos.boxcol && el.getAttribute("boxrow") == mcPos.boxrow)
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
                <Box className='box' sx={snakeBoardTile} boxcol={j+1} boxrow = {i+1} >{j+1}</Box>
                )}
            </span>
            )}
        </div>
    )
}
export default Snake