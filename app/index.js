import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

// Building color variables that will be accessable throghout the app
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0'
  // $outline: 1 // good for development
})

export default () => <Home /> // you can not export a component, but you can export a function that returns a component
