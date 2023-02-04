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
    as={'a'}
      bg={"white"}
      p={"10"}
      href={'/'}
      _hover={{
        bg: "red.600",
      }}
    >
      <Heading
        fontWeight={600}
        color={"black"}
        mb={"5"}
        fontSize={{ base: "2xl", md: "4xl" }}
      >
        {title}{" "}
      </Heading>
      <Text color={"black"} mb={"20"} fontSize={{ base: "2xl", sm: "2xl" }}>
        {text}
      </Text>
    </Stack>
  );
};

export default function CoreCourses() {
  return (
    <Box 
        p={4} 
        h={'3xl'}
        backgroundImage={
          
        'url(https://img.freepik.com/premium-photo/metaverse-city-with-connection-3d-render_84831-456.jpg?w=1380)' 
        
      }>
      <Box m={"20"}  >
        <Heading
          fontWeight={800}
          textAlign={"center"}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color='white'
          mb={'10'}
           
        >
          Core Courses <br/>
          <Text fontSize={{ base: "2xl", sm: "2xl", md: "1xl" }}>(Common in All Specializations)</Text>
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
