import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

export default function NavItem({ title, description, active, navSize }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems="flex-start"
            borderRadius={8}
            backgroundColor={active && "#AEC8CA"}
            _hover={{ backgroundColor: "#AEC8CA" }}
        >
            <Menu placement="right">
                <Link
                    p={3}
                    _hover={{ textDecor: 'none' }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                
            </Menu>
        </Flex>
    )
}