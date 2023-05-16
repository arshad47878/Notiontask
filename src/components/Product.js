import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Pagination } from "@material-ui/lab";
// import usePagination from "@mui/material/usePagination/usePagination";
// import Pagination from "./Pagination";
// import { Pagination } from "@material-ui/lab";

// const baseURL = "https://dummyjson.com/products?limit=12&skip=page";

export default function Product(){
  let [page, setPage] = useState(1);
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=12&skip=${page}`).then((response) => {
          console.log("products",response)
          setPost(response.data.products);
        });
      }, [page]);

  // const PER_PAGE = 6;

//   const count = Math.ceil(post.length / PER_PAGE);
//   const _DATA = usePagination(post, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    // _DATA.jump(p);
  };
    return(
        <>
            <Stack sx={{marginTop:3}} justifyContent="center">
            <Box sx={{ height: '100%' }}>

            <Grid container
                spacing={5}
               >
            {post?.map((d)=>(
                <Grid item xs={4} pr={1}>
                    <Card sx={{ height: "100%" }}>
                       
                       <CardActionArea>
                         <CardMedia
                           component="img"
                           height="140"
                           image={d.thumbnail}
                           alt="green iguana"
                         />
                         <CardContent>
                           <Typography variant="body2" color="text.secondary">
                           {d.title}
                           </Typography>
                           <Typography gutterBottom variant="b3" component="div">
                           {d.description}
                           </Typography>
                           <Typography gutterBottom variant="b3" component="div">Brand - {d.brand}
                           </Typography>
                           <Typography gutterBottom variant="b3" component="div">Price - {d.price}
                           </Typography>
                         </CardContent>
                       </CardActionArea>
                     </Card>
                </Grid>
                    
                )
              )
            }
            
            </Grid>
            </Box>
            <Pagination color="primary" count={10} 
            page={page}
            onChange={handleChange}/>

               
            </Stack>
        </>
    )
}