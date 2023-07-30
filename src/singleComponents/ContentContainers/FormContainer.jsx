/* eslint-disable react/prop-types */
import { Stack } from '@chakra-ui/react'

export default function FormContainer ({ children }) {
  return (
    <Stack
      bg='gray.700'
      spacing={8}
      mx='auto'
      maxW='lg'
      py={12}
      px={6}
    >
      {children}
    </Stack>
  )
}
