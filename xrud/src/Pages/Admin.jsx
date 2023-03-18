import {
  Button,
  Center,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProduct } from "../Redux/AddProduct/actions";

const obj = {
  images: "",
  title: "",
  description: "",
  price: "",
  category: "",
};

export default function Admin() {
  const [product, setproduct] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct({ ...product, [name]: value });
  };
  const dispatch = useDispatch();

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(postProduct(product));
    setproduct(obj);
  };

  return (
    <Center mt={"10px"}>
      <form onSubmit={handleAddProduct}>
        <Center mb={10}>
          <Heading>Add Your Product ✌️</Heading>
        </Center>
        <VStack spacing={"24px"} w={"500px"}>
          <Input
            placeholder="images"
            name="images"
            value={product.images}
            onChange={handleChange}
          />
          <Input
            placeholder="Title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
          <Input
            placeholder="decription"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
          <Input
            type={"number"}
            placeholder="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <Select
            placeholder="Select option"
            name="category"
            value={product.category}
            onChange={handleChange}>
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="kids">Kids</option>
          </Select>
        </VStack>
        <Center mt={10}>
          <Button type="submit">Add</Button>
        </Center>
      </form>
    </Center>
  );
}
