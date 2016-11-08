// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text, 
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieListPage from '../../pages/MovieListPage';


export default class LoggedIn extends Component {
  TABS = {
    list: 'LIST',
    friends: 'FRIENDS',
    watch: 'WATCH',
    search: 'SEARCH',
  };

  constructor (props) {
    super(props);

    this.state = {
      activeTab: this.TABS.list
    };
  }

  _onChangeTab = (tabName) => {
    this.setState({
      activeTab: tabName
    });
  }

  _getIcon = (imageUri) => {
    return {
      uri: imageUri,
      isStatic: true,
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <TabBarIOS
          tintColor='red'
          barTintColor='white'
          unselectedTintColor='grey'
          style={styles.tabBar}
        >
          <Icon.TabBarItemIOS
            title='Your List'
            iconName='list'
            iconSize={20}
            selected={this.state.activeTab === this.TABS.list}
            onPress={this._onChangeTab.bind(null, this.TABS.list)}
            style={styles.tabBarItem}
          >
            <MovieListPage />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title='Friends'
            iconName='user-plus'
            iconSize={20}
            selected={this.state.activeTab === this.TABS.friends}
            onPress={this._onChangeTab.bind(null, this.TABS.friends)}
            style={styles.tabBarItem}
          >
            <Text style={styles.content}>Friends</Text>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title='Watch'
            iconName='film'
            iconSize={20}
            selected={this.state.activeTab === this.TABS.watch}
            onPress={this._onChangeTab.bind(null, this.TABS.watch)}
            style={styles.tabBarItem}
          >
            <Text style={styles.content}>Watch</Text>
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            title='Search'
            iconName='search'
            iconSize={20}
            selected={this.state.activeTab === this.TABS.search}
            onPress={this._onChangeTab.bind(null, this.TABS.search)}
            style={styles.tabBarItem}
          >
            <Text style={styles.content}>Search</Text>
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  tabBar: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarItem: {
    height: 50,
    width: 50,
  },
  content: {
    height: 100,
    width: 100,
  }
});