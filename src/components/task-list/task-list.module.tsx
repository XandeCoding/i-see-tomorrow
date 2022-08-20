import { View, Text } from 'react-native'

type props = {
    items: string[]
}

export const TaskList = ({ items }: props) => {
    return (
        <View>
            { items.map((item) => <Text>{ item }</Text>) }
        </View>
    )
}
