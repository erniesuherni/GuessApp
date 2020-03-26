import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//     </View>
//   );
// cont 4 / to make long comment}

export default class Game extends Component {
   render (){
     return(
       <view style={styles.container}>
         <text>Guess my number</text>
       </view>
     )
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ff33ff',
    fontSize: 32
  }
});
