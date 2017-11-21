import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

var width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    top: Metrics.doubleBaseMargin,
    position: 'absolute',
    width: width - Metrics.section,
  },
  textContainer: {
    backgroundColor: Colors.snow,
    paddingVertical: Metrics.baseMargin,
    borderRadius: Metrics.buttonRadius,
  },
  inputSearch: {
    fontSize: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    color: Colors.charcoal,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  iconSearch: {

  }
})
