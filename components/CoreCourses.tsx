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
      bg={"white"}
      p={"10"}
      _hover={{
        bg: "red.600",
      }}
    >
      <Text
        fontWeight={600}
        color={"black"}
        mb={"5"}
        fontSize={{ base: "2xl", sm: "2xl" }}
      >
        {title}{" "}
      </Text>
      <Text color={"black"} mb={"20"} fontSize={{ base: "1sm", sm: "1sm" }}>
        {text}
      </Text>
    </Stack>
  );
};

export default function CoreCourses() {
  return (
    <Box 
        p={4} 
        h={'2xl'}
        backgroundImage={
        'url(https://img.freepik.com/free-photo/front-view-young-female-playing-vr-dark-visual-fantasy-play-game_179666-42839.jpg?w=1060&t=st=1675408036~exp=1675408636~hmac=81146bca50d6281a7d258ffc1d861a949242f423ad66a8a3b3a8d2ad43388efc)'
      }>
      <Box m={"20"}>
        <Heading
          fontWeight={800}
          textAlign={"center"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color='white'
          mb={'10'}
        >
          Core Courses (Common in All Specializations)
        </Heading>
        <Text
          color={"white"}
          textAlign={"center"}
          fontSize={{ base: "1xl", sm: "2xl", md: "1xl" }}
        >
          Every participant of the program will start by completing the following three core courses:
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} >
        <Feature
          title={"Quarter I (Core)"}
          text={
            "TCS-101: Object-Oriented Programming using TypeScript"
          }
        />
        <Feature
          title={
            "Quarter II (Core)"
          }
          text={
            "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
          }
        />
        <Feature
          title={"Quarter III (Core)"}
          text={
            "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
