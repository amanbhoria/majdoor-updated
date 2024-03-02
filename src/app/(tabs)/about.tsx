import React from 'react';
import { Image, ScrollView, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const About = () => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", width: '100%' }}>
            <View style={styles.fullWidthPadding}>
      <View style={styles.textCenter}>
        <Image
          style={styles.imageStyle}
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
        />
      </View>
      <Pressable>
        <Text style={styles.underlineText}>Personal Details</Text>
      </Pressable>
      <View style={[styles.flexRow, styles.marginVertical]}>
        <Text style={styles.halfWidth}>Name</Text>
        <TextInput style={styles.inputHalfWidth} defaultValue='Ashutosh' />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.halfWidth}>Mobile No.</Text>
        <TextInput style={styles.inputHalfWidth} defaultValue='Ashutosh' />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.halfWidth}>Aadhaar No.</Text>
        <TextInput style={styles.inputHalfWidth} defaultValue='Ashutosh' />
      </View>
    </View>
        </SafeAreaView>
    );
}

export default About;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1, justifyContent: "center", alignItems: "center", width: '100%'
    },
    fullWidthPadding: {
        width: '100%',
        padding: 4,
      },
      textCenter: {
        alignItems: 'center',
      },
      imageStyle: {
        height: 150,
        width: 150,
        alignSelf: 'center',
      },
      underlineText: {
        textDecorationLine: 'underline',
      },
      flexRow: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 4,
      },
      marginVertical: {
        marginTop: 8,
      },
      halfWidth: {
        width: '50%',
      },
      inputHalfWidth: {
        backgroundColor: 'white',
        width: '50%',
      },
})
