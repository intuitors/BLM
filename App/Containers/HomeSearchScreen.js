import React, { Component } from 'react'
import { TouchableOpacity, View, ScrollView, Image, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import SearchPlaces from '../Containers/SearchPlaces'
// Styles
import styles from './Styles/HomeSearchScreenStyle'

class HomeSearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={styles.backButton}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <KeyboardAvoidingView behavior='padding' style={styles.searchBoxContainer}>
          <TouchableOpacity style={styles.textContainer} onPress={this._toggleModal}>
            <TextInput style={styles.inputSearch}
              placeholder='Set location on map'
              underlineColorAndroid='transparent'
              tintColor={"white"} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <SearchPlaces/>
      </View>

      // <ScrollView style={styles.container}>
      //   <KeyboardAvoidingView behavior='position'>
      //     <Text>HomeSearchScreen</Text>
      //   </KeyboardAvoidingView>
      // </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeSearchScreen)
