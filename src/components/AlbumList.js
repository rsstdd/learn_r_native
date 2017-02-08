// React has to be in scope --> REact.createComponent when it transpiles

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  ComponentWillMount() {
    axios.get('harrypotterapi.herokuapp.com/movies') // promise - ajax is inherenetly async
      .then((response) => {
        console.log('here');
        console.log(response);
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    this.state.albums.map((album) => {
      return <Text>{album.title}</Text>
    });
  }

  render() {
    console.log(this.state.albums);
    return (
      <View>
        {this.renderAlbums}
      </View>
      );
    }
}

export default AlbumList;

// These are functonal components. Functionality is limited
// import React from 'react';
// import { View, Text } fdrom 'react-native';
//
// const AlbumList = () => (
//   <View>
//     <Text>Some Text</Text>
//   </View>
// );
//
// export default AlbumList;
// Class Components are more powerful
// * Used for dynamic sources of data
// * handles any data that might change
// * knows when it gets rendered to the device (useful for data fetching)
// * more code to write
// * You have to have a render method - returns some amount of JSX


// * Lifecycle Methods - Class components
//    ** Functions placed on class that will be called at some point
//    ** ComponentWillMount - called as right before the component is mounted
