import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    padding: 0,
    // color: '#000'
  },
  icon: {
    backgroundColor: 'transparent',
    color: Colors.charcoal,
    padding: Metrics.doubleBaseMargin,
  },
  indicator: {
    flex: 1,
    // backgroundColor: '#0084ff',
    margin: 4,
    borderRadius: 2,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
})
