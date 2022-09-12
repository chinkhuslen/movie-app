import { Box } from '@mui/system'
import data from '../mockData/data.json'
const MenuPage = () =>{
    return(
    <div>
        {data.map((el)=>
            <Box>
                <Box>zurag</Box>
                <Box>ner : {el.name}</Box>
                <Box>une : {el.price}</Box>
                <Box>portion : {el.portion}</Box>
            </Box>
        )}
    </div>
    )
}
export default MenuPage