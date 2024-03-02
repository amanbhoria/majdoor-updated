import { useState } from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

const ListBox = () => {
    const [showInfo,setShowInfo] = useState(false);
    return (
        <View style={styles.container}>
      <View style={styles.header}>
        <Text>Ongoing Job</Text>
        <Pressable>
          <Text>About Icon</Text>
        </Pressable>
      </View>
      <Pressable style={styles.viewButton} onPress={() => setShowInfo(!showInfo)}>
        <Text style={styles.viewButtonText}>View</Text>
      </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // for Android
      padding: 4,
      backgroundColor: 'white',
      marginBottom: 2,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    viewButton: {
      width: 100,
      alignSelf: 'center',
      marginTop: 8,
    },
    viewButtonText: {
      textAlign: 'center',
      color: '#D946EF', // Fuchsia-600
      // Add 'hover' effect in React Native via TouchableOpacity or Pressable's onPressIn/onPressOut if needed
    },
  });

export default ListBox;