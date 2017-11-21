import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

var width = Dimensions.get('window').width;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    // backgroundColor: Colors.clear,
  },
  textContainer: {
    backgroundColor: Colors.snow,
    borderRadius: Metrics.buttonRadius,
    borderWidth: 1,
    borderColor: Colors.background,
  },
  backButton: {
    position: 'absolute',
    paddingTop: Metrics.smallMargin,
    paddingHorizontal: Metrics.baseMargin,
    zIndex: Metrics.baseMargin
  },
  searchBoxContainer: {
    top: Metrics.doubleSection,
    position: 'relative',
    paddingHorizontal: Metrics.doubleBaseMargin,
    width: width
  },
  inputSearch: {
    fontSize: Metrics.doubleBaseMargin,
    backgroundColor: Colors.snow,
    color: Colors.charcoal,
    paddingHorizontal: Metrics.baseMargin
  },
})
