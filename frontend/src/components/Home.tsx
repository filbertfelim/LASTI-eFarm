import React from "react";
import Navbar from "./Navbar";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/lahan`;
    navigate(path);
  };

  return (
    <>
      <Navbar></Navbar>
      <SimpleGrid columns={{ md: 1, xl: 2 }} spacing={10} mt={"80px"}>
        <Box>
          <Stack
            direction={["column"]}
            spacing="24px"
            mx={{ base: "30px", md: "50px", xl: "100px" }}
          >
            <Box>
              <Heading fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }}>
                Welcome to eFarm!
              </Heading>
            </Box>
            <Box>
              <Text
                fontSize={{ md: "sm", xl: "xl" }}
                fontWeight={600}
                letterSpacing={"1px"}
              >
                Smart farming adalah konsep manajemen pertanian menggunakan
                teknologi modern untuk meningatkan kualitas dan kuantitas produk
                pertanian. Proyek smart farming mengintegrasikan layanan
                informasi sistem dan teknologi untuk merevolusi proses bisnis
                dalam pertanian.
              </Text>
            </Box>
            <Box>
              <Button
                _hover={{ backgroundColor: "#415331" }}
                onClick={routeChange}
                backgroundColor="#6F9E4A"
                color={"white"}
                borderRadius={"10px"}
                px={"50px"}
                py={"25px"}
              >
                Mulai Menanam
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box my={"20px"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Image
              width={"500px"}
              objectFit="cover"
              src="/home.png "
              marginRight={"15px"}
            />
          </Flex>
        </Box>
      </SimpleGrid>
      <Image
        w={"100%"}
        objectFit="contain"
        src="/farm.png "
        marginRight={"15px"}
      />
    </>
  );
}
