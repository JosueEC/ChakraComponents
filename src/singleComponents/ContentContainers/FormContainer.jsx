/* eslint-disable react/prop-types */
import { Box, Stack } from '@chakra-ui/react'
import { bgElement } from '../../utils/ChakraTheme/ColorPalette'

export default function FormContainer ({ children }) {
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
