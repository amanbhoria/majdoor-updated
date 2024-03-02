import { useRef } from "react";
import { Keyboard, Pressable, Text, TextInput, ToastAndroid, View } from "react-native";

type OTPInputInterface = {
    code: any;
    setCode: any;
    maximumLength: any;
    setIsPinReady?: any;
}

const OtpInputBox = ({ code, setCode, maximumLength, setIsPinReady }: OTPInputInterface) => {
    const boxArray = [0,0,0,0];
    const inputRef = useRef();

    const boxDigit = () => {
        return (
            <Text>Hi</Text>
        );
    };
    const handleOnBlur = () => { };
    return (
        <View className="justify-center items-center">

            <Pressable className="w-[80%] justify-evenly items-center"> {boxArray.map(boxDigit)} </Pressable>
            {/* <TextInput className="w-[300px] border-2 p-4"
                ref={inputRef}
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                onBlur={handleOnBlur}

            /> */}



        </View>
    );
}

export default OtpInputBox;