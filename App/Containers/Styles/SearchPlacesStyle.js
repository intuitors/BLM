import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
var width = Dimensions.get("window").width;
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    top: 110,
    position: 'absolute',
    width: width,
    backgroundColor: Colors.snow,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
  },
  row: {
    // flex: 1,
    // backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  leftIcon: {
    fontSize: 20,
    color: Colors.charcoal,
    marginRight: 10,
  },
  primaryText: {
    fontWeight: 'bold',
    color: Colors.charcoal
  },
  secondaryText: {
    fontStyle: 'italic',
    color: Colors.charcoal
  },
})
