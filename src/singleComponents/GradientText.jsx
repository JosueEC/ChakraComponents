/* eslint-disable react/prop-types */
import { Heading } from '@chakra-ui/react'

export default function GradientText ({ text, ...rest }) {
  return (
    <Heading
      {...rest}
      fontSize='4xl'
      bgGradient='linear(to-l, teal.300, green.400)'
      bgClip='text'
    >
      {text}
    </Heading>
  )
}
