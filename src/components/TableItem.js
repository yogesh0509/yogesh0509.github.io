import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    GridItem,
    Flex,
    useBreakpointValue
} from '@chakra-ui/react'

export default function TableItem(props) {

    const colSpan = useBreakpointValue({base: 5, lg: 3})
    return (
        <GridItem colSpan={colSpan}>
            <Flex
                flexDir="column"
                overflow="auto"
                p="5%"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            >
                <TableContainer overflowY="auto" maxHeight="300px"
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: '8px',
                            borderRadius: '8px',
                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: `rgba(0, 0, 0, 0.05)`,
                        },
                    }}
                >
                    <Table variant='simple'>
                        <TableCaption>Fish Coordinates</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Fishes</Th>
                                <Th>Coordinates</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {props.data.map((coordinates, index) => (
                                <Tr>
                                    <Td>Fish {index}</Td>
                                    <Td>({coordinates[0]}, {coordinates[1]})</Td>
                                </Tr>
                            ))}

                        </Tbody>
                    </Table>
                </TableContainer>
            </Flex>
        </GridItem>
    );
}