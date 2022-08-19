import { useState } from 'react'
import { SafeAreaView, TextInput } from 'react-native'
import { TextInputCustomStyle } from './text-input-custom.style'

type props = {
  onChangeText: (text: string) => {}
}

export const TextInputCustom = ({ onChangeText }: props) => {
  const [text, setText] = useState('')
  
  const onChangeTextHandler = (newText: string) => {
    setText(newText)
    onChangeText(newText)
  }

  return (
    <SafeAreaView>
      <TextInput
        style={ TextInputCustomStyle.input }
        placeholder="Digite aqui"
        onChangeText={ onChangeTextHandler }
        defaultValue={ text }
      />
    </SafeAreaView>
  )
}

