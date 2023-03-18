import { Box } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar,";

export default function HomePage() {
  return (
    <Box display={"flex"}>
      <Sidebar />
      <Product />
    </Box>
  );
}
