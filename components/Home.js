import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Styles } from "../utils/Style";

const Home = () => {
  const navigation = useNavigation();

  const Appeals = () => {
    navigation.navigate("Appeals");
  };
  return (
    <>
      <View style={Styles.container}>
        <Image source={require("../assets/logo.png")} style={Styles.Logo} />
        <Text style={Styles.HomeText}>The Human Aid Foundation</Text>
        <TouchableOpacity style={Styles.DonateBtn} onPress={Appeals}>
          <Text style={Styles.DonateBtnText}>Donate Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
