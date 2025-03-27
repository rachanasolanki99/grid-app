import { Box, Button, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";

const GridComponent = () => {
    const [selected, setSelected] = useState<{[key: number]: number}>({});
    const [clickCount, setClickCount] = useState(1)
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        backgroundColor: '#fff',
        textAlign: 'center',
        padding: "5px",
        height: 100,
        width: 100
    }));
    const handleClick = (i: number) => {
        setSelected((prev: any) => ({ ...prev, [i]: clickCount }))
        setClickCount((prev) => prev + 1);
    }
    const handleClear = () => {
        setSelected({})
        setClickCount(1)
    }
    return (
        <>
            <div>
                <Grid container rowSpacing={1}>
                    {Array.from({length: 9}, (_ ,i) => (
                        <Grid size={4}>
                            <Item onClick={() => handleClick(i)}>{selected[i]}</Item>
                        </Grid>
                    ))}
                </Grid>
                <Button onClick={handleClear} style={{ height: "10px", width: "20px"}}>Clear</Button>
            </div>
        </>
    )
}

export default GridComponent;