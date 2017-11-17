import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    top: height - 200,
    // backgroundColor: Colors.cloud,
    width: width,
  },
  row: {
    backgroundColor: Colors.snow,
    // marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    width: width / 2,
    height: width / 4,
    marginLeft: width / 10,
    marginBottom: width / 10
  },
  item: {
    backgroundColor: Colors.snow,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'auto',
    color: Colors.fire,
    // textAlign: 'center',
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'auto',
    color: Colors.fire,
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin
  },
  listContent: {
    // marginTop: Metrics.baseMargin
  },
  itemIcon: {
    alignSelf: 'auto',
    marginLeft: Metrics.smallMargin,
    marginBottom: Metrics.smallMargin
  }
})
