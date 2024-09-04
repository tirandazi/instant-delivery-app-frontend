import React from 'react'
import RootNavigator from './src/navigation/RootNavigator'
import { StatusBar } from 'expo-status-bar'

const App = () => {
  return (
    <>
      <RootNavigator />
      <StatusBar style='light' />
    </>
  )
}
export default App
