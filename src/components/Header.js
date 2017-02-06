// import libraries for making a comoponent
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 25
  }
};

// Make a component available to other parts of the app
export default Header;

// View tag lets you position and style the elements.
//  *  Kindof like a div.

// React Native uses Flexbox for Positioning
//  *  Flexbox - system of positioning elements within a container
//  *  By Default - everything in react native gets positioned in the top-left
//     of the parent container.
//  *  To center text:
        // * justify content - position elements in the veritcal position
        // * justifyContent: 'flex-end', 'center', 'flex-start' <-- default (top-left)
        // * alignItems: 'flex-start', 'center', 'end' <-- right (manipulating things x axis)
