import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
        }}
      >Hi, my name is Keith, and I am a mobile developer.</Text>
    </View>
  );
}
