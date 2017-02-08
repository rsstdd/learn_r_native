import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);


// react-native run ios <-- to compile and launch the simulator
