import React, { Component } from 'react'
import { Animated, View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ProfileScreen from '../Containers/ProfileScreen'
import ActivityScreen from '../Containers/ActivityScreen'
import ProfessionalScreen from '../Containers/ProfessionalScreen'
import Home from '../Components/Home.js'
import NotificationScreen from '../Containers/NotificationScreen'
// Styles
import styles from './Styles/NavigationScreenStyle'

class NavigationScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>NavigationScreen</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationScreen)
