import React from 'react'
import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
  useColorMode,
} from '@chakra-ui/react'


const SwitchThemeButton: React.FC<ChakraSwitchProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ChakraSwitch
      onChange={toggleColorMode}
      size='lg'
      {...props}
    />
  )
}

export default SwitchThemeButton