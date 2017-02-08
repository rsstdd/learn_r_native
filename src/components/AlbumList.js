// React has to be in scope --> REact.createComponent when it transpiles

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [
      {
        "aliases": [
            "The Daughter of the Dusk"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5"
        ],
        "born": "",
        "culture": "Braavosi",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/1"
    },
    {
        "aliases": [
            "Hodor"
        ],
        "allegiances": [
            "http://anapioficeandfire.com/api/houses/362"
        ],
        "books": [
            "http://anapioficeandfire.com/api/books/1",
            "http://anapioficeandfire.com/api/books/2",
            "http://anapioficeandfire.com/api/books/3",
            "http://anapioficeandfire.com/api/books/5",
            "http://anapioficeandfire.com/api/books/8"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Male",
        "mother": "",
        "name": "Walder",
        "playedBy": [
            "Kristian Nairn"
        ],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [
            "Season 1",
            "Season 2",
            "Season 3",
            "Season 4",
            "Season 6"
        ],
        "url": "http://anapioficeandfire.com/api/characters/2"
    },
    {
        "aliases": [
            "Lamprey"
        ],
        "allegiances": [
            "http://anapioficeandfire.com/api/houses/15"
        ],
        "books": [
            "http://anapioficeandfire.com/api/books/3"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/3"
    },
    {
        "aliases": [
            "The Merling Queen"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5",
            "http://anapioficeandfire.com/api/books/8"
        ],
        "born": "",
        "culture": "Braavosi",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/4"
    },
    {
        "aliases": [
            "Old Crackbones"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/5"
    },
    {
        "aliases": [
            "The Poetess"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5"
        ],
        "born": "",
        "culture": "Braavosi",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/6"
    },
    {
        "aliases": [
            "Porridge"
        ],
        "allegiances": [
            "http://anapioficeandfire.com/api/houses/15"
        ],
        "books": [
            "http://anapioficeandfire.com/api/books/3"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/7"
    },
    {
        "aliases": [
            "Quickfinger"
        ],
        "allegiances": [
            "http://anapioficeandfire.com/api/houses/23"
        ],
        "books": [
            "http://anapioficeandfire.com/api/books/6"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/8"
    },
    {
        "aliases": [
            "the Sailor's Wife"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5"
        ],
        "born": "",
        "culture": "",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/9"
    },
    {
        "aliases": [
            "The Veiled Lady"
        ],
        "allegiances": [],
        "books": [
            "http://anapioficeandfire.com/api/books/5"
        ],
        "born": "",
        "culture": "Braavosi",
        "died": "",
        "father": "",
        "gender": "Unknown",
        "mother": "",
        "name": "",
        "playedBy": [],
        "povBooks": [],
        "spouse": "",
        "titles": [],
        "tvSeries": [],
        "url": "http://anapioficeandfire.com/api/characters/10"
    }
  ]
    };
  }

  // ComponentWillMount() {
  //   axios.get('http://anapioficeandfire.com/api/characters') // promise - ajax is inherenetly async
  //     .then((res) => {
  //       this.setState({ albums: res.data });
  //     });
  // }

  renderAlbums() {
    this.state.albums.map((album) => {
      return <Text>{album.title}</Text>;
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
