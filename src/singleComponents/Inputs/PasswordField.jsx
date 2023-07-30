/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { passwordRules } from '../../utils/HookFormValidations/Rules'
import { bgText, bgErrorField, bgFocusFiled } from '../../utils/ChakraTheme/ColorPalette'

export default function PasswordFiled ({ register, errors }) {
  return (
    <FormControl isInvalid={errors.password}>
      <FormLabel color={bgText}>Contraseña</FormLabel>
      <Input
        color={bgText}
        type='password'
        focusBorderColor={errors.password ? bgErrorField : bgFocusFiled}
        {...register('password', passwordRules)}
      />
      <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
    </FormControl>
  )
}
