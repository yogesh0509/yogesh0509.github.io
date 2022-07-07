import { Heading, Flex, GridItem } from '@chakra-ui/react';
import { useContext } from 'react';
import ViewportContext from './Context/ViewportContext';

export default function HeadingText() {

    const viewportCtx = useContext(ViewportContext);

    return (
        
            <Heading
                fontWeight="normal"
                mb={4}
                letterSpacing="tight"
                color='#eb4034'
            >
                {viewportCtx.viewportState}
            </Heading>
    );
}