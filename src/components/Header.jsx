import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    Modal,
    ModalOverlay,
    Container,
    ModalCloseButton,
    ModalContent,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Projects", "Service", "About", "News", "Contact"];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Container maxW="container.lg">
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <Box>
                            <Image src={logo} boxSize="3rem" />
                        </Box>

                        <Box>
                            <IconButton
                                size={"md"}
                                icon={
                                    isOpen ? <CloseIcon /> : <HamburgerIcon />
                                }
                                aria-label={"Open Menu"}
                                display={{ md: "none" }}
                                onClick={isOpen ? onClose : onOpen}
                            />
                            <HStack spacing={8} alignItems={"center"}>
                                <HStack
                                    as={"nav"}
                                    spacing={4}
                                    display={{ base: "none", md: "flex" }}
                                >
                                    {Links.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
                                    ))}
                                </HStack>
                            </HStack>
                        </Box>
                        <Box display={{ base: "none", md: "block" }}>
                            <Breadcrumb>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        Docs
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Box>
                    </Flex>
                </Container>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalCloseButton />
                                <Stack as={"nav"} spacing={4}>
                                    {Links.map((link) => (
                                        <NavLink key={link}>{link}</NavLink>
                                    ))}
                                </Stack>
                            </ModalContent>
                        </Modal>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};

export default Header;
