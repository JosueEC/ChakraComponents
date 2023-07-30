/* eslint-disable react/prop-types */
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { emailRules } from '../../utils/HookFormValidations/Rules'
import { bgText, bgFocusFiled, bgErrorField } from '../../utils/ChakraTheme/ColorPalette'

export default function EmailField ({ register, errors }) {
  return (
    <FormControl isInvalid={errors.email}>
      <FormLabel color={bgText}>Correo electronico</FormLabel>
      <Input
        color={bgText}
        type='email'
        placeholder='ejemplo-correo@gmail.com'
        focusBorderColor={errors.email ? bgErrorField : bgFocusFiled}
        {...register('email', emailRules)}
      />
      <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
    </FormControl>
  )
}
