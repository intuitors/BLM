import { StackNavigator } from 'react-navigation'
import ProfessionalScreen from '../Containers/ProfessionalScreen'
import NavigationScreen from '../Containers/NavigationScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProfessionalScreen: { screen: ProfessionalScreen },
  NavigationScreen: { screen: NavigationScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
