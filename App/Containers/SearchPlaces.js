import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/SearchPlacesStyle'

class SearchPlaces extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      googlePlaces: props.places
    }
  }

  componentWillReceiveProps(props){
    console.log("SearchResults props 1", props.places);
    this.setState({
      googlePlaces: props.places
    })
    console.log("SearchResults props 2", this.state.googlePlaces);
  }

  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  // state = {
  //   dataObjects: [
  //     {title: 'First Title', description: 'First Description'},
  //     {title: 'Second Title', description: 'Second Description'},
  //     {title: 'Third Title', description: 'Third Description'},
  //     {title: 'Fourth Title', description: 'Fourth Description'},
  //     {title: 'Fifth Title', description: 'Fifth Description'}
  //   ]
  // }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    return (
      <TouchableOpacity style={styles.row}>
      <View>
          <Icon name='map-marker' style={styles.leftIcon} />
        </View>
      <View style={styles.row}>
        <Text style={styles.primaryText}>{item.primaryText}</Text>
        <Text style={styles.secondaryText}>{item.secondaryText}</Text>
      </View>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    // <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    // <Text style={[styles.label, styles.sectionHeader]}> Set location on map </Text>

  // Show this when data is empty
  renderEmpty = () =>
    // <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    // <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.googlePlaces}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPlaces)
