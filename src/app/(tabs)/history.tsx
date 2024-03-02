import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const History = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar />
            <Text>History</Text>
        </SafeAreaView >
    );
}

export default History;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1, justifyContent: "center", alignItems: "center", width: '100%'
    }
})

