import { Text, View, StyleSheet} from "react-native";
import React from "react";
import Loginscreentest from '../components/Loginscreentest'

function Index(){
  return (
    <View style={styles.Container}>
    <Loginscreentest/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    maxWidth:"auto",
    justifyContent: "center",
     alignItems: "center",
    backgroundColor: '#f0f0f0', // Optional: set a background color
    padding:'auto', // Optional: padding to adjust spacing on different screen sizes
  
  }


})

export default Index


// import { Text, View, StyleSheet } from "react-native";
// import React, { useState, useEffect } from "react";
// import Loginscreentest from '../components/Loginscreentest';
 
 
// function Index() {
//   const [token, setToken] = useState(false);
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setToken(true);
//     }, 5000);
 
//     // Cleanup the timer when the component is unmounted
//     return () => clearTimeout(timer);
//   }, []);
 
//   return (
//     <View style={styles.Container}>
//       {token ? <DemoScreen /> : <Loginscreentest />}
//     </View>
//   );
// }
 
// const styles = StyleSheet.create({
//   Container: {
//     flex: 1,
//     maxWidth: "auto",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: '#b3b3b3', // Optional: set a background color
//     padding: 20, // Optional: padding to adjust spacing on different screen sizes
//   }
// });
 
// export default Index;



