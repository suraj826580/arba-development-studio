import React from "react";
import Carousel from "../components/carousel/Carousel";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import { Grid, Box, Button } from "@chakra-ui/react";

function HomePage() {
  return (
    <Box p="3">
      <Navbar />
      <Carousel />
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {new Array(10).fill(0).map((item, index) => {
          return (
            <Card
              key={index}
              imageUrl="https://plus.unsplash.com/premium_photo-1713803863170-436be4feb510?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
              productName="Product 1"
              description="Little bit more"
              amount="300"
            />
          );
        })}
      </Grid>
      <Box display="flex" justifyContent="end">
        <Button marginRight="3" colorScheme="linkedin">
          All Products &gt; &gt;
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
