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

    this.renderAlbums = this.renderAlbums.bind(this);
  }

  // ComponentWillMount - Invoked immediately before mounting occurs.
  // It is called before render( ), therefore,
  // setting state in this method will not trigger a re-rendering.

  // I think this should be componentDidMount()

  componentWillMount() {
    // promise - ajax is inherenetly async
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => this.setState({ albums: res.data }))
      .catch(() => console.log('Failed Api Call'));
  }

  renderAlbums() {
    this.state.albums.map((album) => {
      // do not use the index in an array as the key because it will not rerender correctly
      // an id would be ideal
      return <Text key={album.title}>{album.title}</Text>;
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
