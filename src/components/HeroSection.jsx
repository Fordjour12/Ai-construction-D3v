import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
	Heading,
	Wrap,
	Box,
	Image,
	Spacer,
	Center,
} from '@chakra-ui/react'

import check from '../assets/checker.svg'

const heroContent = [
	{
		image: check,
		header: 'Innovation',
		number: '1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis quod consectetur adipisci? Vero aut voluptates laudantium dolores omnisexercitationem.',
	},
	{
		image: check,
		header: 'Sustainable',
		number: '2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis quod consectetur adipisci? Vero aut voluptates laudantium dolores omnisexercitationem.',
	},
	{
		image: check,
		header: 'Comfortable',
		number: '3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis quod consectetur adipisci? Vero aut voluptates laudantium dolores omnisexercitationem.',
	},
]

import bgImg from '../assets/joel-filipe-vw4-IpWQu94-unsplash.jpg'
const HeroSection = () => {
	return (
		<Wrap mx={useBreakpointValue({ md: 10 })}>
			<Flex
				w={'full'}
				h={useBreakpointValue({ base: '60vh', md: '90vh' })}
				backgroundImage={bgImg}
				backgroundSize={'cover'}
				backgroundPosition={'center center'}
				backgroundRepeat={'no-repeat'}
			>
				<VStack
					w={'full'}
					justify={'center'}
					px={useBreakpointValue({ base: 4, md: 8 })}
					// bgGradient={"linear( blackAlpha.600, transparent)"}
					bgBlendMode={'multiply'}
					bgColor={'blackAlpha.600'}
				>
					<Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
						<Stack>
							<Heading
								color={'white'}
								fontWeight={900}
								lineHeight={1.2}
								fontSize={useBreakpointValue({
									base: '5xl',
									md: '8xl',
								})}
							>
								AiThemed Construction
							</Heading>
							<Text
								color={'white'}
								fontSize={useBreakpointValue({ md: '2xl' })}
								fontWeight={400}
							>
								It is a long established fact that a reader will
								be distracted by the readable content of a page
							</Text>
						</Stack>
						<Box>
							<Button
								bg={'yellow.400'}
								rounded={'base'}
								color={{ base: 'black' }}
							>
								Get A Quote
							</Button>
						</Box>
					</Stack>
				</VStack>
			</Flex>

			<Flex
				flexDirection={useBreakpointValue({
					base: 'column',
					md: 'row',
				})}
			>
				{heroContent.map((hero, index) => {
					return (
						<>
							<Stack key={index} my={'6'} mx={7}>
								<Box mb={'3'} ml={'-3'}>
									<Flex>
										<Image
											mr={3}
											src={hero.image}
											alt={hero.image}
										/>
										<Heading fontSize={'4xl'}>
											{hero.header}
										</Heading>
									</Flex>
								</Box>
								<Box>
									<Flex>
										<Heading mr={9}>{hero.number}</Heading>
										<Text
											fontSize={useBreakpointValue({
												base: 'xs',
												md: '',
											})}
										>
											{hero.description}
										</Text>
									</Flex>
								</Box>
							</Stack>
						</>
					)
				})}
			</Flex>
		</Wrap>
	)
}

export default HeroSection
