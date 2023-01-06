import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
const Register = () => {
  return (
    <View>
      <Signup/>
    <Login/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({})