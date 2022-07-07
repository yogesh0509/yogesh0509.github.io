import { Grid, Flex, VStack } from "@chakra-ui/react"
import Sidebar from './Nav/MenuLayout';
import MenuIcon from './Nav/MenuIcon';
import HeadingText from "./HeadingText";
import TableItem from "./TableItem";
import LineGraph from "./LineGraph";
import BatteryIndicator from "./BatteryIndicator";
import ViewportContext from './Context/ViewportContext';
import { useContext } from 'react'

const coordinates = [[5, 0], [10, 2], [5, 0], [10, 2], [5, 0], [10, 2], [5, 0], [10, 2]];

export default function Dashboard(props) {

    const viewportCtx = useContext(ViewportContext);
    return (
        <Flex
            h='95vh'
        >
            {viewportCtx.viewportState == "lg" ? <Sidebar /> : <MenuIcon />}
            <VStack
                w="full"
                h="full"
                p={25}
                spacing={6}
                align="flex-start"
                // display="flex"
                // flex-wrap="wrap"
                // overflow-y="scroll"
            >
                <HeadingText />
                <Grid
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    w="full"
                    h="200px"
                >
                    <TableItem data={coordinates} />
                    <BatteryIndicator percentage={60} />
                    <LineGraph heading="Line graph" />
                </Grid>
            </VStack>
        </Flex >

    )
}