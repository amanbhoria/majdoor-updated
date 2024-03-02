import React, {useState} from "react";
import { Button,Text, TextInput, ToastAndroid, View } from "react-native";
import { Modal, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { OTPVerification } from '@msg91comm/react-native-sendotp';
import { Image, Pressable } from 'react-native';



const otpGeneration = async (navigation: any) => {
    console.log("working");
    navigation.navigate('Layout')
}

const Login = ({navigation}:any) => {
    const [name, onChangeText] = React.useState('');
    const [mobile, onChangeMobile] = React.useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const [newUser,setNewUser] = React.useState(false);


    // return (
    //     <View className="flex justify-center items-center w-full h-full p-8">
    //        {newUser && <TextInput className="py-2 px-4 border-b focus:border-fuchsia-900 mb-8 w-full" onChangeText={onChangeText} placeholder="Full Name" value={name} />}
    //         <TextInput clas  sName="py-2 px-4 border-b focus:border-fuchsia-900 mb-8 w-full" onChangeText={onChangeMobile} placeholder="Mobile Number" value={mobile} />
    //         <Button
    //             onPress={()=>otpGeneration(navigation)}
    //             title="Get OTP"
    //             color="#841584"
    //             accessibilityLabel="Get OTP"
    
    //         />
    
    //         {!newUser && <Text className="fixed b-4 pt-10">New to App? <Text className="text-fuchsia-600" onPress={()=>setNewUser(true)}>Sign Up</Text></Text>}
    //         {newUser && <Text className="fixed b-4 pt-10">Already a User? <Text className="text-fuchsia-600" onPress={()=>setNewUser(false)}>Login</Text></Text>}
    //     </View>
    // );

    // return (
    //     <View style={styles.container}>
    //   <View style={styles.header}>
    //     <Text>Ongoing Job</Text>
    //     <Pressable>
    //       <Text>About Icon</Text>
    //     </Pressable>
    //   </View>
    //   <Pressable style={styles.viewButton} onPress={() => setModalVisible(true)}>
    //     <Text style={styles.viewButtonText}>View</Text>
    //   </Pressable>
    // </View>
    // );

return (
  <View style={styles.container2}>
  <Image style={styles.logo} source={require('../../assets/logo.png')}></Image>

        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
      <Text style={styles.title}>Login With OTP</Text>
  </TouchableOpacity>

  <Modal visible={isModalVisible}>
      <OTPVerification
          onVisible={isModalVisible}
          onCompletion={(data) => {
              console.log(data)                       // Get your response of success/failure.
              setModalVisible(false)
          }}
          authToken="414932TrUsa4AHbo65b8da2fP1" // Get authToken from MSG91 OTP Tokens
          widgetId="3461446f3763373736373934"
          />
  </Modal>
</View>
);
    
}

const styles = StyleSheet.create({container2: {
    flex: 1, // 'flex' to make the View use the entire screen
    justifyContent: 'center', // 'justify-center' to center children vertically
    alignItems: 'center', // 'items-center' to center children horizontally
    width: '100%', // 'w-full' to make the View take the full width
    height: '100%', // 'h-full' to make the View take the full height
    padding: 32, // 'p-8' assuming 1 unit is 4 (so 8 units = 32)
  },
    container: {
        width: '100%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4, // for Android shadow
        padding: 4,
        backgroundColor: 'white',
        marginBottom: 2,
        flex: 1,
        justifyContent: 'center'
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      viewButton: {
        width: 100,
        alignSelf: 'center',
        marginTop: 32, // mt-8 in Tailwind is 2rem, assuming 1rem = 16px
      },
      viewButtonText: {
        textAlign: 'center',
        color: '#D946EF', // text-fuchsia-600
        // For hover effect, you'll need to handle it differently in React Native, possibly via state
      },
    logo: {
        height: 300,
        width: 300,
        borderRadius: 300,
        marginBottom: 20
    },
title: {
    color: 'white'
},
    button: {
        backgroundColor: '#841584',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 14
    },
});
export default Login;