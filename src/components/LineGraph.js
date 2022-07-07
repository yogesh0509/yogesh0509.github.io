import { Flex, GridItem, Text, useBreakpointValue } from "@chakra-ui/react"
import LineGraphItem from "./LineGraphItem";
export default function Statistics(props) {
    const colSpan = useBreakpointValue({base: 5, lg: 3});
    return (
        <GridItem colSpan={colSpan}>
            <Flex
                flexDir="column"
                overflow="auto"
                p="2%"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            >
                <Text fontWeight="bold" fontSize="2xl" p="3%">{props.heading}</Text>
                <LineGraphItem />
            </Flex>
        </GridItem>
    )
}