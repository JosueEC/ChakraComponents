/* eslint-disable react/prop-types */
import { Flex } from '@chakra-ui/react'

export default function CenteredContainer ({ children, ...rest }) {
  return (
    <Flex
      {...rest}
      border='solid 2px green'
      minH='100vh'
      align='center'
      justify='center'
      bg='gray.800'
    >
      {children}
    </Flex>
  )
}
