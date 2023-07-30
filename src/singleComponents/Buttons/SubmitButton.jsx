/* eslint-disable react/prop-types */
import { Button } from '@chakra-ui/react'

export default function SubmitButton ({ text, onClick, loading = false }) {
  const bgButton = 'teal.400'

  return (
    <Button
      bg={bgButton}
      color='white'
      _hover={{ bg: 'teal.500' }}
      isLoading={loading}
      type='submit'
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
