import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, KeyboardAvoidingView, TouchableOpacity, Modal } from 'react-native'
import styles from './Styles/HomeSearchStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeSearchScreen from '../Containers/HomeSearchScreen'

export default class HomeSearch extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  _toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TouchableOpacity style={styles.textContainer} onPress={this._toggleModal}>
          <Text style={styles.inputSearch} >
            {/* {<Icon name='map-marker' size={15} style={styles.iconSearch} />} */}
            Set location on map
          </Text>
        </TouchableOpacity>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this._toggleModal}>
          <HomeSearchScreen screenProps={{ toggle: this._toggleModal }} />
        </Modal>
      </KeyboardAvoidingView>
    )
  }
}
