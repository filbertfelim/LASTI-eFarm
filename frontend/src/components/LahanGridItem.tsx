import {
  Box,
  Button,
  Divider,
  GridItem,
  Image,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

interface Props {
  lahan: {
    x: number;
    y: number;
    lastFertilized: Date;
    isPlanted: boolean;
    motionLevel: string;
    humidityLevel: number;
    plant: NoPlant | Plant;
  };
}

interface Bibit {
  nama: string;
  jumlah: number;
}

interface NoPlant {
  isPlanted: boolean;
}

interface Plant {
  nama: string;
}

const LahanGridItem = ({ lahan }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isNoPlantOpen,
    onOpen: onNoPlantOpen,
    onClose: onNoPlantClose,
  } = useDisclosure();

  const [dataBibit, setDataBibit] = useState<Bibit[]>([]);
  const [bibit, setBibit] = useState<string>("");
  const [jumlahBibit, setJumlahBibit] = useState<number>(0);

  function setBibitStock(inputBibit: string) {
    for (const bibit of dataBibit) {
      if (bibit.nama === inputBibit) {
        setJumlahBibit(bibit.jumlah);
        return;
      }
    }
  }

  useEffect(() => {
    const fetchDataBibit = async () => {
      try {
        const { data: response } = await axios.get(
          "http://127.0.0.1:8000/bibit"
        );
        setDataBibit(response);
      } catch (error) {
        console.error("getBibit", error);
      }
    };
    fetchDataBibit();
  }, []);
  return (
    <>
      {lahan.isPlanted ? (
        <>
          <GridItem bg="#6F9E4A" onClick={onOpen}>
            <Image objectFit="contain" src="/plant.png" p={2} />
          </GridItem>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton mt={2} />
              <ModalBody>tes</ModalBody>
              <ModalFooter>tes</ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <GridItem bg="#D9D9D9" onClick={onNoPlantOpen}></GridItem>
          <Modal onClose={onNoPlantClose} isOpen={isNoPlantOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Tentukan Bibit</ModalHeader>
              <ModalCloseButton mt={2} />
              <Box position="relative" px={4}>
                <Divider borderColor={"black"} />
              </Box>
              <Text
                fontSize={{ base: "xs", md: "xs", xl: "sm" }}
                fontWeight={400}
                ml={{ base: "20px" }}
                mt={"5px"}
                letterSpacing={"1px"}
              >
                Pilih jenis bibit yang ingin ditanam
              </Text>
              <Select
                placeholder="Pilih Bibit"
                mx={{ base: "20px" }}
                borderRadius={"20px"}
                py={"5px"}
                w={"auto"}
                mt={"5px"}
                defaultValue={""}
                onChange={(e) => {
                  setBibit(e.target.value);
                  setBibitStock(e.target.value);
                }}
              >
                {dataBibit.map((item) => {
                  return <option value={item.nama}>{item.nama}</option>;
                })}
              </Select>
              <Text
                fontSize={{ base: "xs", md: "xs", xl: "sm" }}
                fontWeight={400}
                ml={{ base: "20px" }}
                mt={"5px"}
                letterSpacing={"1px"}
              >
                Stok tersedia : {jumlahBibit}
              </Text>
              <Button
                _hover={{ backgroundColor: "#415331" }}
                isDisabled={bibit === "" || jumlahBibit === 0}
                //   onClick={routeChange}
                backgroundColor="#6F9E4A"
                w={"50%"}
                color={"white"}
                borderRadius={"10px"}
                mx={"auto"}
                my={{ base: "20px" }}
                py={"25px"}
              >
                Mulai Menanam
              </Button>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default LahanGridItem;
