import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import axios from "axios";
import LahanGridItem from "./LahanGridItem";

interface LahanInterface {
  x: number;
  y: number;
  lastFertilized: Date;
  isPlanted: boolean;
  motionLevel: string;
  humidityLevel: number;
  plant: NoPlant | Plant;
}

interface NoPlant {
  isPlanted: boolean;
}

interface Plant {
  nama: string;
}

export default function Lahan() {
  const [dataLahan, setDataLahan] = useState<LahanInterface[]>([]);

  useEffect(() => {
    const fetchDataLahan = async () => {
      try {
        const { data: response } = await axios.get(
          "https://smartefarm.azurewebsites.net/lahan"
        );
        setDataLahan(response);
      } catch (error) {
        console.error("getLahan", error);
      }
    };
    fetchDataLahan();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Stack
        direction={["column"]}
        spacing="24px"
        display={"flex"}
        alignItems={"center"}
        mx={{ base: "20px", md: "100px", xl: "300px" }}
        my={"20px"}
      >
        <Box>
          <Heading fontSize={{ base: "2xl", md: "3xl", xl: "5xl" }}>
            Lahan e-Farm
          </Heading>
        </Box>
        <Box>
          <Text
            fontSize={{ md: "sm", xl: "xl" }}
            fontWeight={400}
            letterSpacing={"1px"}
            mx={{ base: "0px", md: "50px", xl: "200px" }}
            textAlign={"center"}
          >
            Berikut adalah peta lahanmu, jangan lupa untuk memperhatikan kondisi
            bibit melalui icon di setiap lahan yang sudah terisi.
          </Text>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {dataLahan.map((item) => {
            return <LahanGridItem lahan={item}></LahanGridItem>;
          })}
        </Grid>
      </Stack>
    </>
  );
}
