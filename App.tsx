if (__DEV__) {
  import('./reactotronConfig')
    .then(() => console.log('Reactotron Configured'))
}


import AppContainer from './src/screens/containers/app-container'

export default function App() {
  return (
  <>
    <AppContainer/>
  </>
  )
}

