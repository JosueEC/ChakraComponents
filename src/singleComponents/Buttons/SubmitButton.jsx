/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'
import { bgButton, bgHoverButton } from '../../utils/ChakraTheme/ColorPalette'

export default function SubmitButton ({ text, onClick, loading = false }) {
  return (
    <Button
      bg={bgButton}
      color='white'
      _hover={{ bg: bgHoverButton }}
      isLoading={loading}
      type='submit'
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
