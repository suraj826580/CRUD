import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/product/actions";
import { Center, Spinner, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const [searchparam] = useSearchParams();
  const location = useLocation();
  const { isLoading, isError, products } = useSelector(
    (store) => store.productReducer
  );
  console.log();
  const obj = {
    params: {
      _sort: "price",
      _order: searchparam.get("order"),
      category: searchparam.getAll("category"),
    },
  };
  useEffect(() => {
    dispatch(getProductData(obj));
  }, [location.search]);

  if (isLoading) {
    return (
      <Center ml={"40%"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return (
    <Center ml={"5%"}>
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {products.map((item, ind) => {
          return <ProductCard key={ind} {...item} />;
        })}
      </Grid>
    </Center>
  );
}
