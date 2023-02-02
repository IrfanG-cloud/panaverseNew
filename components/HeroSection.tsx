import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://img.freepik.com/free-vector/abstract-digital-banner-with-wire-mesh_1017-33802.jpg?w=1480&t=st=1675330902~exp=1675331502~hmac=fcb1ceb8d6920c016a301df5ad236400af6e66b8572ed39935d8fbb3fc3e60d4)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, lg: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '5xl', lg: '5xl' })}>
              Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
            </Text>
            <Text
              color={'white'}
              fontWeight={100}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', sm: '1xl' })}
              pb='50'>
             Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'black'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'red' }}>
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }