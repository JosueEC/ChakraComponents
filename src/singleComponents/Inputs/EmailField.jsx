/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { emailRules } from '../../utils/HookFormValidations/Rules'
import { bgText } from '../../utils/ChakraTheme/ColorPalette'

export default function EmailField ({ register, errors }) {
  return (
    <FormControl isInvalid={errors.email}>
      <FormLabel color={bgText}>Correo electronico</FormLabel>
      <Input
        color={bgText}
        type='email'
        placeholder='ejemplo-correo@gmail.com'
        focusBorderColor={errors.email ? 'red.500' : 'teal.400'}
        {...register('email', emailRules)}
      />
      <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
    </FormControl>
  )
}
