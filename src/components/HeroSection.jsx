import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Container,
    Heading,
    Wrap,
    Box,
    HStack,
} from "@chakra-ui/react";
import bgImg from "../assets/joel-filipe-vw4-IpWQu94-unsplash.jpg";
const HeroSection = () => {
    return (
        <Wrap mx={useBreakpointValue({ md: 10 })}>
            <Flex
                w={"full"}
                h={useBreakpointValue({ base: "60vh", md: "90vh" })}
                backgroundImage={bgImg}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                backgroundRepeat={"no-repeat"}
            >
                <VStack
                    w={"full"}
                    justify={"center"}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    // bgGradient={"linear( blackAlpha.600, transparent)"}
                    bgBlendMode={"multiply"}
                    bgColor={"blackAlpha.600"}
                >
                    <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                        <Stack>
                            <Heading
                                color={"white"}
                                fontWeight={900}
                                lineHeight={1.2}
                                fontSize={useBreakpointValue({
                                    base: "5xl",
                                    md: "8xl",
                                })}
                            >
                                AiThemed Construction
                            </Heading>
                            <Text
                                color={"white"}
                                fontSize={useBreakpointValue({ md: "2xl" })}
                                fontWeight={400}
                            >
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                            </Text>
                        </Stack>
                        <Box>
                            <Button
                                bg={"yellow.400"}
                                rounded={"base"}
                                color={{ base: "black" }}
                            >
                                Get A Quote
                            </Button>
                        </Box>
                    </Stack>
                </VStack>
            </Flex>
        </Wrap>
    );
};

export default HeroSection;
