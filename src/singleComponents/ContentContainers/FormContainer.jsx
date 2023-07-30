/* eslint-disable react/prop-types */
import { Box, Stack } from '@chakra-ui/react'

export default function FormContainer ({ children }) {
  const bgElement = 'gray.800'
  return (
    <Box
      rounded='lg'
      bg={bgElement}
      shadow='lg'
      p={8}
    >
      <Stack spacing={4}>
        {children}
      </Stack>
    </Box>
  )
}
