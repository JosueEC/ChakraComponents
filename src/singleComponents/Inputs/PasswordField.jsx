import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function PasswordFiled () {
  const bgText = 'gray.300'
  return (
    <FormControl>
      <FormLabel color={bgText}>Contraseña</FormLabel>
      <Input
        type='password'
        focusBorderColor='teal.400'
      />
    </FormControl>
  )
}
