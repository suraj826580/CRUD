import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, description, images, id }) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}>
        <Box>
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={images}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {description.substring(1, 50)}
          </Text>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {price * 1.5}
            </Text>
          </Stack>
        </Stack>
        <Center mt={5}>
          <Link to={`/products/${id}/edit`}>
            <Button
              _hover={{
                backgroundColor: "#CFD8DC",
              }}>
              Edit{" "}
            </Button>
          </Link>
        </Center>
      </Box>
    </Center>
  );
}
//
