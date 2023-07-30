import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function EmailField () {
  const bgText = 'gray.300'
  return (
    <FormControl>
      <FormLabel color={bgText}>Correo electronico</FormLabel>
      <Input
        type='email'
        placeholder='ejemplo-correo@gmail.com'
        focusBorderColor='teal.400'
        color={bgText}
      />
    </FormControl>
  )
}
