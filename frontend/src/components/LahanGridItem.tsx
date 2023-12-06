import {
  Box,
  Button,
  Divider,
  GridItem,
  Image,
  Select,
  Stack,
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

  const plantBibit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    x: number,
    y: number,
    bibit: string
  ) => {
    event.preventDefault();
    try {
      await axios
        .put(
          "https://smartefarm.azurewebsites.net/lahan/" +
            x.toString() +
            "/" +
            y.toString() +
            "/" +
            bibit
        )
        .then((response) => {
          onNoPlantClose();
          window.location.reload();
        });
    } catch (error) {
      console.error("plantBibit", error);
    }
  };

  const waterBibit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    x: number,
    y: number
  ) => {
    event.preventDefault();
    try {
      await axios
        .put(
          "https://smartefarm.azurewebsites.net/" +
            "siram/" +
            x.toString() +
            "/" +
            y.toString()
        )
        .then((response) => {
          onClose();
          window.location.reload();
        });
    } catch (error) {
      console.error("waterBibit", error);
    }
  };

  const fertilizeBibit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    x: number,
    y: number
  ) => {
    event.preventDefault();
    try {
      await axios
        .put(
          "https://smartefarm.azurewebsites.net/" +
            "fertilize/" +
            x.toString() +
            "/" +
            y.toString()
        )
        .then((response) => {
          onClose();
          window.location.reload();
        });
    } catch (error) {
      console.error("fertilizeBibit", error);
    }
  };

  const controlPest = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    x: number,
    y: number
  ) => {
    event.preventDefault();
    try {
      await axios
        .put(
          "https://smartefarm.azurewebsites.net/" +
            "controlpest/" +
            x.toString() +
            "/" +
            y.toString()
        )
        .then((response) => {
          onClose();
          window.location.reload();
        });
    } catch (error) {
      console.error("controlPest", error);
    }
  };

  useEffect(() => {
    const fetchDataBibit = async () => {
      try {
        const { data: response } = await axios.get(
          "https://smartefarm.azurewebsites.net/bibit"
        );
        setDataBibit(response);
      } catch (error) {
        console.error("getBibit", error);
      }
    };
    fetchDataBibit();
  }, [onNoPlantClose]);
  return (
    <>
      {lahan.isPlanted ? (
        <>
          <GridItem
            bg={
              lahan.humidityLevel < 20 || lahan.motionLevel === "High"
                ? "#E00303"
                : "#6F9E4A"
            }
            onClick={onOpen}
          >
            <Image objectFit="contain" src="/plant.png" p={2} />
          </GridItem>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent mx={"auto"}>
              <ModalHeader mx={"auto"} mt={"40px"}>
                <Image objectFit="contain" src="/plant2.png" w={"150px"} />
              </ModalHeader>
              <ModalCloseButton mt={2} />
              <Stack direction={["column"]} spacing="12px">
                <Text
                  fontSize={{ base: "sm", md: "md", xl: "lg" }}
                  fontWeight={700}
                  letterSpacing={"1px"}
                  textAlign={"center"}
                >
                  Last Fertilized : {lahan.lastFertilized as never as string}
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", xl: "lg" }}
                  fontWeight={700}
                  letterSpacing={"1px"}
                  textAlign={"center"}
                  textColor={lahan.humidityLevel < 20 ? "#E00303" : "black"}
                >
                  Humidity Level : {lahan.humidityLevel}
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", xl: "lg" }}
                  fontWeight={700}
                  letterSpacing={"1px"}
                  textAlign={"center"}
                  textColor={lahan.motionLevel === "High" ? "#E00303" : "black"}
                >
                  Motion Level : {lahan.motionLevel}
                </Text>
                <Button
                  _hover={{ backgroundColor: "#CC800F", textColor: "white" }}
                  onClick={async (e) => {
                    await fertilizeBibit(e, lahan.x, lahan.y);
                  }}
                  variant={"outline"}
                  w={"50%"}
                  borderColor={"#CC800F"}
                  borderRadius={"10px"}
                  mt={"10px"}
                  mx={"auto"}
                  py={"15px"}
                >
                  Beri Pupuk
                </Button>
                <Button
                  _hover={{ backgroundColor: "#699BF7", textColor: "white" }}
                  onClick={async (e) => {
                    await waterBibit(e, lahan.x, lahan.y);
                  }}
                  variant={"outline"}
                  w={"50%"}
                  borderColor={"#699BF7"}
                  borderRadius={"10px"}
                  mx={"auto"}
                  py={"15px"}
                >
                  Siram Tanaman
                </Button>
                <Button
                  _hover={{ backgroundColor: "#6F9E4A", textColor: "white" }}
                  onClick={async (e) => {
                    await controlPest(e, lahan.x, lahan.y);
                  }}
                  variant={"outline"}
                  w={"50%"}
                  borderColor={"#6F9E4A"}
                  borderRadius={"10px"}
                  mx={"auto"}
                  py={"15px"}
                >
                  Beri Pestisida
                </Button>
              </Stack>
              <ModalBody></ModalBody>
              <ModalFooter></ModalFooter>
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
                onClick={async (e) => {
                  await plantBibit(e, lahan.x, lahan.y, bibit);
                }}
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
