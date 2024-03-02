import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import ListBox from '../../components/ListBox';

const Home = ({ navigation }: any) => {
    const array = [1,2,3,4,5,6,6,7,86,5,5,6,7,8,66,3]

    return (
        <SafeAreaView style={ styles.SafeAreaView }>
            <StatusBar />
            <FlatList style={styles.FlatLlist} data={array} renderItem={()=><ListBox/>} />
        </SafeAreaView >
    );
}

export default Home;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1, justifyContent: "center", alignItems: "center", height: '100%'
    },
    FlatLlist: {
        width: '100%',
        padding: 4
    }
  });

