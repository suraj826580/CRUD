import {
  Button,
  Center,
  Heading,
  Input,
  Select,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPatch } from "../Redux/product/auth/actions";

const intialState = {
  title: "",
  images: "",
  price: "",
  category: "",
  description: "",
};
export default function EditProduct() {
  const [data, setdata] = useState(intialState);
  const [success, setsuccess] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((store) => {
    return store.productReducer;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    delete data.id;
    dispatch(getPatch(data, id)).then((res) => {
      setsuccess(true);
      setTimeout(() => {
        setsuccess(false);
      }, 2000);
    });
    setdata(intialState);
  };

  useEffect(() => {
    const data = products.find((item) => item.id === +id);
    setdata(data);
  }, []);
  return (
    <Center mt={10}>
      <form onSubmit={handleSubmit}>
        <Center>
          {" "}
          <VStack mb={5}>
            {!success ? (
              <Heading>Edit Your Product 👍</Heading>
            ) : (
              <Heading>Product Update Successfully</Heading>
            )}
            <Text>Your Product id : {id} 😊</Text>
          </VStack>
        </Center>
        <VStack spacing={5} width={"500px"}>
          <Input
            type="url"
            placeholder="image"
            value={data?.images}
            name="images"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="title"
            value={data?.title}
            name="title"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="description"
            value={data?.description}
            name="description"
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="price in number"
            value={data?.price}
            name="price"
            onChange={handleChange}
          />

          <Select
            placeholder="Select option"
            value={data?.category}
            name="category"
            onChange={handleChange}>
            <option value="mens">Mens</option>
            <option value="womens">Womens</option>
            <option value="kids">Kids</option>
          </Select>
          <Button type="submit">Update</Button>
        </VStack>
      </form>
    </Center>
  );
}
