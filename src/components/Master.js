import { Stack } from "@mui/material";
import Navbar from "./Navbar";
import SignUp from "./SignInSide";
import SignInSide from "./SignInSide";
import SignIn from "./SignIn";
import { useState } from "react";
import Product from "./Product";

export default function Master(){
    const [show,setShow]=useState(false)
    return(
        <Stack>
            {/* { show?(
					<Navbar />

            ):(
							<SignInSide />
            )
             } */}
            {/* <SignIn /> */}
            <Navbar />
            {/* <SignInSide /> */}
            <Product />
        </Stack>
    )
}