import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "../Redux/product/auth/actions";

const obj = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector((store) => {
    return store.authReducer;
  });
  const [userCredentials, setuserCredentials] = useState(obj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserCredentials({ ...userCredentials, [name]: value });
  };
  const submitCredential = (e) => {
    e.preventDefault();
    dispatch(getAuth(userCredentials)).then((res) => {
      setTimeout(() => {
        navigate(location.state, { replace: true });
      }, 1000);
    });
    setuserCredentials(obj);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          {!isAuth ? (
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          ) : (
            <Heading fontSize={"4xl"}>Login Successfully ✌️</Heading>
          )}
          {!isAuth ? (
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          ) : (
            ""
          )}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <form onSubmit={submitCredential}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={userCredentials.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={userCredentials.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
