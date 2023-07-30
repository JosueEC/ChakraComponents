/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react'
import { bgPage } from '../../utils/ChakraTheme/ColorPalette'

export default function CenteredContainer ({ children, ...rest }) {
  return (
    <Flex
      {...rest}
      minH='100vh'
      align='center'
      justify='center'
      bg={bgPage}
    >
      {children}
    </Flex>
  )
}
