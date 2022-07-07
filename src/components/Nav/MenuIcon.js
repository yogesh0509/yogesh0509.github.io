import {
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import MenuLayout from './MenuLayout';

export default function () {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <IconButton
                background="none"
                mt={5}
                _hover={{ background: 'none' }}
                icon={<FiMenu />}
                onClick={onOpen}
                ref={btnRef}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <MenuLayout />
                </DrawerContent>
            </Drawer>
        </>
    );
}