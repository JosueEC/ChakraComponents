/* eslint-disable react/prop-types */
import { Heading } from '@chakra-ui/react'
import { bgGradient } from '../utils/ChakraTheme/ColorPalette'

export default function GradientText ({ text, ...rest }) {
  return (
    <Heading
      {...rest}
      fontSize='4xl'
      bgGradient={bgGradient}
      bgClip='text'
    >
      {text}
    </Heading>
  )
}
