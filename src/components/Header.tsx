import React from 'react'
import {
  Flex as ChakraFlex,
  FlexProps as ChakraFlexProps,
  useColorModeValue
} from '@chakra-ui/react'

const Header: React.FC<ChakraFlexProps> = (props) => {
  const backgroundColor = useColorModeValue('green.800', 'green.500')
  const fontColor = useColorModeValue('gray.300', 'gray.700')

  return (
    <ChakraFlex
      as='header'
      alignItems='center'
      minWidth='100%'
      minHeight='80px'
      backgroundColor={backgroundColor}
      color={fontColor}

      {...props}
    >
    </ChakraFlex>
  )
}

export default Header