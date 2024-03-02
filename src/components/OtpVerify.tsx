import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import OtpInputBox from "./OtpInputBox";

const OtpVerify = () => {

    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;

    function resendOtp(e: any) {
        console.log("Otp Resend", e);
    }
    return (
        <View className="flex justify-center items-center w-full h-full p-8">
            <OtpInputBox code={otpCode}
                setCode={setOTPCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady} />
            <Text className="fixed b-4 pt-10" onPress={() => resendOtp}>Resend OTP</Text>
        </View>
    );
}

export default OtpVerify;