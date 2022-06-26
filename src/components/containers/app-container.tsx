import { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'

type Props = {
  children: ReactNode
}

export default function AppContainer({ children }: Props) {
  return (
    <NavigationContainer>
      { children }
    </NavigationContainer>
  )
}
