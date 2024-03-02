import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ListBox from '../../components/ListBox';

const Search = () => {
    const array = [1, 2, 3, 4, 5, 6, 6, 7, 86, 5, 5, 6, 7, 8, 66, 3]
    return (
        <SafeAreaView style={ styles.SafeAreaView }>
            <View>
                <TextInput style={styles.TextInput}placeholder='Search' />
            </View>
            <FlatList style={styles.FlatLlist} data={array} renderItem={() => <ListBox />} />
        </SafeAreaView >
    )
}

export default Search;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1, justifyContent: "center", alignItems: "center", height: '100%'
    },
    FlatLlist: {
        width: '100%',
        padding: 4
    },
    View: {
      width: '100%',
      paddingLeft: 4,
paddingRight: 4,
marginTop: 2
    },
    TextInput: {
        backgroundColor: 'white',
        paddingLeft: 4,
paddingRight: 2,
    }
  });