import React, { Component } from 'react'
import { Animated, View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ProfessionalScreen from '../Containers/ProfessionalScreen'
import ActivityScreen from '../Containers/ActivityScreen'
import Home from '../Components/Home.js'
import ProfileScreen from '../Containers/ProfileScreen'
import NotificationScreen from '../Containers/NotificationScreen'
// Styles
import styles from './Styles/NavigationScreenStyle'

class NavigationScreen extends Component {

  state = {
    index: 2,
    routes: [
      { key: '1', icon: 'handshake-o' },
      { key: '2', icon: 'bars' },
      { key: '3', icon: 'home' },
      { key: '4', icon: 'user' },
      { key: '5', icon: 'bell' },
    ],
  };

  _handleIndexChange = index => {
    this.setState({
      index,
    });
  };

  _initialLayout = ({ route }) => {
    return (
      <Home
        state={this.state}
      // style={{ backgroundColor: '#4caf50' }}
      />
    );
  };

  _renderIndicator = props => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[styles.container, { width, transform: [{ translateX }] }]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  _renderIcon = ({ route }) => {
    return <Icon name={route.icon} size={24} style={styles.icon} onIndexChange />;
  };

  _renderBadge = ({ route }) => {
    if (route.key === '5') {
      return (
        <View style={styles.badge}>
          <Text style={styles.count}>42</Text>
        </View>
      );
    }
    return null;
  };

  _renderFooter = props => {
    return (
      <TabBar
        {...props}
        renderIcon={this._renderIcon}
        renderBadge={this._renderBadge}
        renderIndicator={this._renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <ProfessionalScreen
            state={this.state}
            // style={{ backgroundColor: '#ff4081' }}
          />
        );
      case '2':
        return (
          <ActivityScreen
            state={this.state}
            // style={{ backgroundColor: '#673ab7' }}
          />
        );
      case '3':
        return (
          <Home
            state={this.state}
          // style={{ backgroundColor: '#4caf50' }}
          />
        );
      case '4':
        return (
          <ProfileScreen
            state={this.state}
            // style={{ backgroundColor: '#673ab7' }}
          />
        );
      case '5':
        return (
          <NotificationScreen
            state={this.state}
            // style={{ backgroundColor: '#4caf50' }}
          />
        );
      default:
        return (
          <Home
            state={this.state}
          // style={{ backgroundColor: '#4caf50' }}
          />
        );
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationScreen)
