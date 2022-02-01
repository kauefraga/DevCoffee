import React from 'react'
import Head from 'next/head'
import {
  Link as ChakraLink,
  Flex as ChakraFlex,
  Grid as ChakraGrid,
  Text as ChakraText,
  Image as ChakraImage,
  Button as ChakraButton,
  useColorModeValue
} from '@chakra-ui/react'
import {
  Header,
  SwitchThemeButton,
  DevCoffeeLogo
} from '../components/index'

export default function LandingPage () {
  const fontColor = useColorModeValue('green.800', 'green.500')

  return (
    <>
      <Head>
        <meta name='description' content='All developer need to know how to make coffee' />
        <title>Home | DevCoffee</title>
      </Head>

      <Header
        justifyContent='space-between'
      >
        <DevCoffeeLogo marginLeft='8' />

        <nav>
          <ChakraLink
            marginRight='8'
            fontSize='2xl'
            href='/about'
          >
            About us
          </ChakraLink>

          <ChakraLink
            marginRight='8'
            fontSize='2xl'
            href='/contact'
          >
            Contact
          </ChakraLink>

          <SwitchThemeButton marginRight='8' />
        </nav>
      </Header>

      <ChakraGrid
        as='main'
        backgroundColor={useColorModeValue('#FFF', 'gray.700')}
        templateColumns='1fr 400px 560px 1fr'
        templateRows='1fr 480px 270px 270px 270px 1fr'
        templateAreas='
          ". . . ."
          ". Desc CoffeeImage ."
          ". BadCode . ."
          ". . CleanCode ."
          ". HowToMakeCoffee . ."
          ". . . ."
        '
        justifyContent='center'
        alignItems='center'
      >

        <ChakraFlex
          gridArea='Desc'
          flexDirection='column'
          flexWrap='wrap'
        >
          <ChakraText
            as='h1'
            color={fontColor}
            fontWeight='semibold'
            fontSize='4xl'
          >
            There is no developer without coffee
          </ChakraText>

          <ChakraText
            color={useColorModeValue('gray.300', 'gray.400')}
            fontWeight='normal'
            fontSize='md'
          >
            and StackOverflow.
          </ChakraText>
        </ChakraFlex>

        <ChakraImage
          gridArea='CoffeeImage'
          alt='Coffee image'
          src='/1coffee.jpg'
          borderRadius='12px'
        />

        <ChakraFlex
          gridArea='BadCode'
          flexDirection='column'
        >
          <ChakraText as='h3' fontSize='2xl'>
            That's your code, but...
          </ChakraText>

          <ChakraImage
            alt='Bad code example'
            src='/BadCode.png'
            borderRadius='12px'
          />
        </ChakraFlex>

        <ChakraFlex
          gridArea='CleanCode'
          flexDirection='column'
        >
          <ChakraText as='h3' fontSize='2xl'>
            can be this code.
          </ChakraText>

          <ChakraImage
            alt='Clean code example'
            src='/CleanCode.png'
            borderRadius='12px'
          />
        </ChakraFlex>

        <ChakraFlex
          gridArea='HowToMakeCoffee'
          flexDirection='column'
        >
          <ChakraText
            as='h2'
            color={fontColor}
            fontSize='5xl'
            fontWeight='semibold'
          >
            Write better code with some coffee.
          </ChakraText>

          <ChakraText
            marginTop='4'
          >
            Make coffee needs to be <u>easy</u>.
          </ChakraText>

          <ChakraFlex
            marginTop='4'
            backgroundColor={fontColor}
            alignItems='center'
            minHeight='45'
            borderRadius='8px'
          >
            <ChakraLink
              rel='noopener noreferrer'
              target='_blank'
              href='https://youtu.be/RFcuNI33Oq4'
              width='100%'
              height='100%'
              textAlign='center'
              color={useColorModeValue('gray.300', 'gray.700')}
              fontSize='lg'
            >
              Learn now
            </ChakraLink>
          </ChakraFlex>
        </ChakraFlex>

      </ChakraGrid>

      <ChakraGrid
        as='footer'
        backgroundColor={useColorModeValue('gray.100', 'gray.800')}
        templateColumns='1fr 480px 480px 1fr'
        templateRows='1fr 200px 1fr'
        templateAreas='
          ". . . ."
          ". About TechStack ."
          ". . . ."
        '
        justifyContent='center'
        alignItems='center'
        textAlign='center'
      >

        <ChakraFlex
          gridArea='About'
          flexDirection='column'
        >
          <ChakraText
            marginBottom='4'
            fontSize='2xl'
          >
            About
          </ChakraText>

          <ChakraLink
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/kauefraga/DevCoffee'
          >
            Github
          </ChakraLink>

          <ChakraLink
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.figma.com/file/SpaRrUkYsXI2wwM5gf5YdW/CoffeeHouse'
          >
            Design
          </ChakraLink>
        </ChakraFlex>

        <ChakraFlex
          gridArea='TechStack'
          flexDirection='column'
        >
          <ChakraText
            marginBottom='4'
            fontSize='2xl'
          >
            Tech Stack
          </ChakraText>

          <ChakraLink
            rel='noopener noreferrer'
            target='_blank'
            href='https://nextjs.org'
          >
            NextJs
          </ChakraLink>

          <ChakraLink
            rel='noopener noreferrer'
            target='_blank'
            href='https://chakra-ui.com'
          >
            Chakra UI
          </ChakraLink>

          <ChakraLink
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.typescriptlang.org'
          >
            TypeScript
          </ChakraLink>
        </ChakraFlex>

      </ChakraGrid>
    </>
  )
}
