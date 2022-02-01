import React from 'react'
import {
  Flex,
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
  Text as ChakraText
} from '@chakra-ui/react'

const DevCoffeeLogo: React.FC<ChakraImageProps> = (props) => {
  return (
    <Flex
      as='a'
      alignItems='center'
      href='/'
    >
      <ChakraImage
        src='https://cdn.discordapp.com/attachments/896019535373688832/937756330092007435/DarkSiteLogo.png'
        width='70px'
        height='70px'
        {...props}
      />
      <ChakraText
        as='span'
        marginLeft='4'
        fontSize='2xl'
        fontWeight='bold'
      >
        Developer Coffee
      </ChakraText>
    </Flex>
  )
}

export default DevCoffeeLogo