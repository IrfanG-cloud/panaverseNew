import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
}

const Feature = ({ title, text }: FeatureProps) => {
  return (
    <Stack
      bg={"gray.800"}
      p={"10"}
      _hover={{
        bg: "red.600",
      }}
    >
      <Heading
        fontWeight={600}
        color={"white"}
        mb={"5"}
        fontSize={{ base: "3xl", sm: "3xl" }}

      >
        {title}{" "}
      </Heading>
      <Text color={"white"} mb={"20"} fontSize={{ base: "1sm", sm: "1sm" }}>
        {text}
      </Text>
      <Button
        maxW={"20"}
        as={"a"}
        bg={"red.600"}
        textAlign={"center"}
        rounded={"full"}
        color={"white"}
        alignContent={'end'}
        href={"https://www.panaverse.co/"}
        _hover={{
          bg: "white",
          color: "black",
        }}
      >
        APPLY
      </Button>
    </Stack>
  );
};

export default function Courses() {
  return (
    <Box p={4} h={'4xl'}>
      <Box m={"20"}>
        <Heading
          fontWeight={800}
          textAlign={"center"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          mb={'10'}
          color='black'
        >
          Specialized Tracks
        </Heading>
        <Text
          color={"black"}
          textAlign={"center"}
          fontSize={{ base: "1xl", sm: "2xl", md: "1xl" }}
        >
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each:
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 6 }} spacing={1}>
        <Feature
          title={"Web 3.0 (Blockchain) and Metaverse Specialization"}
          text={
            "This Web 3.0 and Metaverse specialization focuses on developing..."
          }
        />
        <Feature
          title={
            "Artificial Intelligence (AI) and Deep Learning Specialization"
          }
          text={
            "The AI and Deep Learning specialization focuses on building .."
          }
        />
        <Feature
          title={"Cloud-Native Computing Specialization"}
          text={
            "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. ."
          }
        />
        <Feature
          title={"Ambient Computing and IoT Specialization"}
          text={
            "The Ambient Computing and IoT Specialization focuses on building.."
          }
        />
        <Feature
          title={"Genomics and Bioinformatics Specialization"}
          text={
            "Genomics is the study of the total genetic makeup of individual organisms.."
          }
        />
        <Feature
          title={"Network Programmability and Automation Specialization"}
          text={
            "More than ever, network engineers are finding it challenging to complete..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
