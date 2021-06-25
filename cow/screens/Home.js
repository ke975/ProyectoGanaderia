import React from 'react';
import { ScrollView,Text,StyleSheet} from 'react-native';

// import { Container } from './styles';

const Home = () => {
  return(
<ScrollView style={styles.container} > 
<Text style={StyleSheet.Text}>hola muundo</Text>

</ScrollView>
  )
}

const styles= StyleSheet.create({
container:{
  flex:1,
  margin:20
},

Text:{
  justifyContent:'center',
  alignItems:'center'
}



})


export default Home;