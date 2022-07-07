import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading,
    GridItem
} from '@chakra-ui/react'
import NavItem from './NavItem';

export default function MenuLayout() {
    return (
        <Flex
            //pos="fixed"
            //left="10"
            //h="95vh"
            marginTop="2.5vh"
            marginLeft="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius="30px"
            //w="200px"
            flexDir="column"
            justifyContent="space-between"
            align="flex-start"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="flex-start"
                as="nav"
            >
                <NavItem title="Dashboard" description="This is the description for the dashboard." active />
                <NavItem title="Calendar" />
                <NavItem title="Clients" />
                <NavItem title="Stocks" />
                <NavItem title="About" />
                <NavItem title="Team" />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems="flex-start"
                mb={4}
            >
                <Divider display="flex" />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display="flex">
                        <Heading as="h3" size="sm">Dassault Applications</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}