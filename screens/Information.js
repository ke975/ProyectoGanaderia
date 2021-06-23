import React from 'react';
import { SafeAreaView,ScrollView,Text,Image,StyleSheet, View} from 'react-native';

// import { Container } from './styles';

const Information = () => {
  return(
<ScrollView style={styles.container}> 


<SafeAreaView>
<Image
style={styles.logo}
source={{
  uri:
    'https://th.bing.com/th/id/Rb28a1d281e9fefc2ad9559441f98d4a2?rik=8SCMRQTjL3VrxA&pid=ImgRaw',
}}

/>
</SafeAreaView>
<View style={styles.center}>
<Text style={styles.text}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed arcu leo. Donec enim orci, rutrum a massa non, ultricies semper arcu. Etiam congue risus blandit tristique molestie. Suspendisse justo ex, malesuada non urna iaculis, pharetra placerat est. Aliquam ut est eget augue dignissim commodo. Aenean euismod nunc at eros suscipit dictum. Mauris et tellus fermentum, tincidunt risus eu, scelerisque neque. Vivamus vel sapien lacus. Donec hendrerit pharetra pulvinar. Sed tristique iaculis arcu, at molestie augue vehicula et. Pellentesque cursus eros non nunc semper viverra. Nullam imperdiet lectus semper enim rutrum varius. Sed at pharetra erat.


</Text>
<Text style={styles.text}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed arcu leo. Donec enim orci, rutrum a massa non, ultricies semper arcu. Etiam congue risus blandit tristique molestie. Suspendisse justo ex, malesuada non urna iaculis, pharetra placerat est. Aliquam ut est eget augue dignissim commodo. Aenean euismod nunc at eros suscipit dictum. Mauris et tellus fermentum, tincidunt risus eu, scelerisque neque. Vivamus vel sapien lacus. Donec hendrerit pharetra pulvinar. Sed tristique iaculis arcu, at molestie augue vehicula et. Pellentesque cursus eros non nunc semper viverra. Nullam imperdiet lectus semper enim rutrum varius. Sed at pharetra erat.


</Text>
<Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed arcu leo. Donec enim orci, rutrum a massa non, ultricies semper arcu. Etiam congue risus blandit tristique molestie. Suspendisse justo ex, malesuada non urna iaculis, pharetra placerat est. Aliquam ut est eget augue dignissim commodo. Aenean euismod nunc at eros suscipit dictum. Mauris et tellus fermentum, tincidunt risus eu, scelerisque neque. Vivamus vel sapien lacus. Donec hendrerit pharetra pulvinar. Sed tristique iaculis arcu, at molestie augue vehicula et. Pellentesque cursus eros non nunc semper viverra. Nullam imperdiet lectus semper enim rutrum varius. Sed at pharetra erat.


</Text>
</View>
<View style={styles.linea}>
<Image
style={styles.image}
source={{
  uri:
    'https://th.bing.com/th/id/Rb28a1d281e9fefc2ad9559441f98d4a2?rik=8SCMRQTjL3VrxA&pid=ImgRaw',
}}
/>
<Text style={styles.text2}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed arcu leo. Donec enim orci, rutrum a massa non, ultricies semper arcu. Etiam congue risus blandit tristique molestie. Suspendisse justo ex, malesuada non 


</Text>


</View>

</ScrollView>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:"green"
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:"blue",
        textAlign:'justify'
    },
    logo:{
        width:'100%',
        height:300,
        
    },
    image:{
        width:50,
        height:50,
        borderRadius:50
    },
    linea:{
        flex:1,
        flexDirection:'row',
       alignItems:'center'
    },
    text:{
        fontSize:15,
        textAlign:'justify',
        justifyContent:'center'
    }


})





export default Information;