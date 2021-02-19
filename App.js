import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';






const BRB = () => {
  const [isPushed, setIsPushed] = useState(true);

  return (
    <Button 
      onPress={() => { 
        setIsPushed(false);
      }}
      disabled={!isPushed}
      color= "#FF0000"
      title={isPushed ? "DO NOT PUSH THIS BIG RED BUTTON" : "Un..fucking..believable.."} 
      />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>we did it boys</Text>


          <Text>Example 1: DON'T PUSH THE BUTTON</Text>
          <BRB/>
      <StatusBar style="auto" />
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BRB: {
    backgroundColor: '#FF0000',
    color: '#FF0000',
  },
});
