import { HStack, Image } from "@chakra-ui/react"
import logo from '../../public/logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px' backgroundColor='rgba(255, 255, 255, 0.115)'>
            <Image src={logo} boxSize='50px' />
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar