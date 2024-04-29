import React, { useState } from "react";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { GridItem, Grid } from "@chakra-ui/react";
import BlueCard from "../sections/BlueCard/BlueCard";
function AuthPage() {
  const [state, setstate] = useState(true);

  return (
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        minH={"100vh"}>
        <GridItem>
          <BlueCard />
        </GridItem>
        <GridItem display={"flex"} justifyContent={"center"} p={10}>
          {state ? (
            <Signup state={state} setstate={setstate} />
          ) : (
            <Login setstate={setstate} state={state} />
          )}
        </GridItem>
      </Grid>
    </>
  );
}

export default AuthPage;
