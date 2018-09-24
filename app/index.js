import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

// Building color variables that will be accessable throghout the app
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF'
})

export default () => <Home /> // you can not export a component, but you can export a function that returns a component
