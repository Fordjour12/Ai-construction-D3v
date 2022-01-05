import {
	Heading,
	Divider,
	Flex,
	Stack,
	Link,
	Image,
	Box,
	Text,
	Wrap,
	useBreakpointValue,
	List,
} from '@chakra-ui/react'
import img1 from '../assets/troy-mortier-eKY6_9W_iqY-unsplash.jpg'
import img2 from '../assets/roberto-nickson-rEJxpBskj3Q-unsplash.jpg'
import img3 from '../assets/pixasquare-4ojhpgKpS68-unsplash.jpg'

const serviceContent = [
	{
		index: 0,
		image: img3,
		header: 'Construction',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, voluptates.',
		link: 'Learn More',
	},
	{
		index: 1,
		image: img1,
		header: 'Renovation',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, voluptates.',
		link: 'Learn More',
	},
	{
		index: 3,
		image: img2,
		header: 'Interior & Exterior',
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perferendis rerum eaque magni tempore doloribus facere a sed. Rerum, ex? Officia debitis a quae deleniti ducimus harum odit beatae, hic error quod mollitia eaque sunt! Ullam velit at vitae dolor!',
		link: 'Learn More',
		link2: 'See all',
		link3: 'Our Services',
	},
]

const Services = () => {
	return (
		<>
			<Heading mb={9}>Our Services</Heading>

			<Wrap mx={useBreakpointValue({ md: 200 })}>
				{serviceContent.map((service, index) => {
					return (
						<Stack mt={'6'}>
							<List key={service.index} styleType={'none'}>
								<Flex
									direction={index % 2 === 0 && 'row-reverse'}
								>
									<Box ml={'14'}>
										<Heading my={'4'}>
											{service.header}
										</Heading>
										<Text>{service.description}</Text>
										<Link textColor={'yellow.500'}>
											{service.link}
										</Link>

										<Link fontSize={'4xl'}>
											<Flex
												mt={'60'}
												direction={'column'}
											>
												<span>{service.link2}</span>
												<span>{service.link3} </span>
											</Flex>
										</Link>
									</Box>

									<Image
										htmlWidth={500}
										fit={'contain'}
										src={service.image}
									/>
								</Flex>
							</List>
						</Stack>
					)
				})}
			</Wrap>
		</>
	)
}

export default Services
