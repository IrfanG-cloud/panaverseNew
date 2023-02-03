"use client";

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

export default function Register() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("black", "black")}
    >
      <Stack spacing={8} mx={"auto"} h={"lg"} w={"lg"} py={2} px={12}>
        <Stack align={"left"}>
          <Heading fontSize={"6xl"} color={"white"}>
            Register
          </Heading>
          <Text fontSize={"lg"} color={"white"}>
            Please fill below.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "black.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          <FormControl id="name">
              <FormLabel>
                Name
              </FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>
                Email
              </FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>
                Password
              </FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"red.600"}
                color={"white"}
                _hover={{
                  bg: "red.400",
                }}
              >
                Register
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
