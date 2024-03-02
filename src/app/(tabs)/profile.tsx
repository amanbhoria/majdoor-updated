import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Profile = () => {
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View>
                <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
            </View>
        </SafeAreaView>
    )
}

// export default Profile;

const styles = StyleSheet.create({
    SafeAreaView: {
        width:'100%',
        flex: 1, justifyContent: "center", alignItems: "center" 

    }
})