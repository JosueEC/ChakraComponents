/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { passwordRules } from '../../utils/HookFormValidations/Rules'
import { bgText } from '../../utils/ChakraTheme/ColorPalette'

export default function PasswordFiled ({ register, errors }) {
  return (
    <FormControl isInvalid={errors.password}>
      <FormLabel color={bgText}>Contraseña</FormLabel>
      <Input
        color={bgText}
        type='password'
        focusBorderColor={errors.password ? 'red.500' : 'teal.400'}
        {...register('password', passwordRules)}
      />
      <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
    </FormControl>
  )
}
