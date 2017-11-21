import { StackNavigator } from 'react-navigation'
import SearchPlaces from '../Containers/SearchPlaces'
import HomeSearchScreen from '../Containers/HomeSearchScreen'
import FooterList from '../Containers/FooterList'
import NotificationScreen from '../Containers/NotificationScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import ActivityScreen from '../Containers/ActivityScreen'
import ProfessionalScreen from '../Containers/ProfessionalScreen'
import NavigationScreen from '../Containers/NavigationScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import Home from '../Components/Home.js'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SearchPlaces: { screen: SearchPlaces },
  HomeSearchScreen: { screen: HomeSearchScreen },
  FooterList: { screen: FooterList },
  Home: { screen: Home },
  NotificationScreen: { screen: NotificationScreen },
  ProfileScreen: { screen: ProfileScreen },
  ActivityScreen: { screen: ActivityScreen },
  ProfessionalScreen: { screen: ProfessionalScreen },
  NavigationScreen: { screen: NavigationScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'NavigationScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
