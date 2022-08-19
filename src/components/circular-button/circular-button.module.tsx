import { TouchableOpacity, Text } from 'react-native'

import { CircularButtonStyle } from './circular-button.style'

type props = {
  text: string,
  onPressCallback: () => {}
} 

export const CircularButton = (
  { text, onPressCallback }: props
) => {
  return (
    <TouchableOpacity
      style={ CircularButtonStyle.button }
      onPress={ onPressCallback }
    >
      <Text>{ text }</Text>
    </TouchableOpacity>
  )
}
