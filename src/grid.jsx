import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
const GridTemp = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{display: {xs: "none", md: "block"}}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'red' }}>.</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'cyan' }}>.</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'blue' }}>.</Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'red' }}>Zar</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={{xs:2,md:0}}>
                                <Grid item xs={12} md={8}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={{xs:2,md:1}}>
                                <Grid item md={4} xs={12}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{display: {xs: "none", md: "block"}}}>Ontsloh medee</Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={{xs:2,md:1}}>
                                <Grid item md={3} xs={12}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item md={3} xs={12}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* ----------------display none on xs media */}
                        <Grid container item spacing={2} sx={{display: {xs: "none", md: "block"}}}>
                        <Grid item xs={12}>
                            <Box sx={{ backgroundColor: 'red' }}>.</Box>
                        </Grid>
                        <Grid item>Haluun sedev</Grid>
                        <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'red' }}>Tech World</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'red' }}>Tech World</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'red' }}>Tech World</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'red' }}>Tech World</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Box sx={{ backgroundColor: 'red' }}>Tech World</Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'red' }}>Left</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ backgroundColor: 'cyan' }}>Right</Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default GridTemp;
