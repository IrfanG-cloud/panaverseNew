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

}

const Feature = ({ title }: FeatureProps) => {
  return (
    <Stack
      bg={"white"}
      p={"10"}
      _hover={{
        bg: "red.600",
      }}
    >
      <Heading
        fontWeight={400}
        color={"black"}
        mb={"5"}
        fontSize={{ base: "2xl", md: "2xl" }}

      >
        {title}{" "}
      </Heading>
      <Button
        maxW={"20"}
        as={"a"}
        bg={"black"}
        textAlign={"center"}
        rounded={"full"}
        color={"white"}
        
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

export default function ProgramParticipant() {
  return (
    <Box p={'5'}  h={'4xl'} 
    backgroundImage={
        'url(https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1480&t=st=1675428312~exp=1675428912~hmac=fc25938bea2be7df7dbe9d92676c1ca665ca595e48c380df60988aeaf637d39e)'} >
      <Box m={"20"}>
        <Heading
          fontWeight={600}
          color={'white'}
          textAlign={"center"}
          fontSize={{ base: "1xl", sm: "xl", md: "6xl" }}
          lineHeight={"110%"}
          mb={'10'}
        >
          The Outcome for Participants of the Program
        </Heading>
        <Text
          color={"white"}
          textAlign={"center"}
          fontSize={{ base: "1xl", sm: "2xl", md: "1xl" }}
        >
         The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally 
         by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). 
         This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the 
         economy a much-needed boost by expanding software exports.
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={1} borderRadius={'2'} borderStyle={'solid'}>
        <Feature
          title={"Top 5 'Metaverse' jobs that will rule the future of tech industry"}/>
        <Feature
          title={
            "Blockchain Developer Salary - Jun 2022"
          }
        />
        <Feature
          title={"Web3 Salaries Soar to $750,000 for Rank-and-File DevsCloud-Native Computing Specialization"} 
        />
        <Feature
          title={"The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters"}  
        />
        <Feature
          title={"How To Become Metaverse Developer: Scope, Skills, and Salary"}  
        />

      </SimpleGrid>
    </Box>
  );
}
