import React from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg="white" px={12}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Flex marginTop={"20px"}>
          <Image
            boxSize="50px"
            objectFit="cover"
            src="https://i.ibb.co/xfCKBRC/IMG-8113-1.png"
            alt="Dan Abramov"
            marginRight={"15px"}
          />
          <Heading fontSize="4xl" marginTop={"5px"} color={"#415331"}>eFarm</Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
