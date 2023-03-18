import React, { useEffect, useState } from "react";

import {
  Center,
  Heading,
  Radio,
  RadioGroup,
  VStack,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
export default function Sidebar() {
  const [searchParam, setSearchParam] = useSearchParams();

  // Filteration
  const [category, setcategory] = useState(
    searchParam.getAll("category") || []
  );
  const handleFilter = (e) => {
    let arr = [...category];
    let value = e.target.value;
    arr.includes(value)
      ? (arr = arr.filter((item) => value != item))
      : arr.push(value);
    setcategory(arr);
  };

  // Sorting
  const [order, setOrder] = useState(searchParam.get("order") || "asc");
  useEffect(() => {
    const param = {
      sort: "price",
      order: order,
      category,
    };
    setSearchParam(param);
  }, [order, category]);

  return (
    <VStack>
      <RadioGroup width={"10%"} spacing={5} onChange={setOrder} value={order}>
        <Center>
          <Heading fontWeight={600} fontSize={"30px"}>
            Sort
          </Heading>
        </Center>
        <VStack mt={5}>
          <Radio value="asc">Ascending</Radio>
          <Radio value="desc">Descending</Radio>
        </VStack>
      </RadioGroup>

      <Heading fontWeight={600} fontSize={"30px"}>
        Filter
      </Heading>
      <Box>
        <Checkbox
          type={"checkbox"}
          value={"mens"}
          onChange={handleFilter}
          isChecked={category.includes("mens")}>
          {" "}
          Mens
        </Checkbox>
        <br />
        <Checkbox
          type="checkbox"
          value={"womens"}
          onChange={handleFilter}
          isChecked={category.includes("womens")}>
          Womens
        </Checkbox>
        <br />
        <Checkbox
          type="checkbox"
          value={"kids"}
          onChange={handleFilter}
          isChecked={category.includes("kids")}>
          Kids
        </Checkbox>
      </Box>
    </VStack>
  );
}
