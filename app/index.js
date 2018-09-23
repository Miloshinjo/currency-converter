import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A'
})

export default () => <Home /> // you can not export a component, but you can export a function that returns a component
