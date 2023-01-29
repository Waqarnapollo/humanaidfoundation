import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../utils/Style";

const Appeal = (props) => {
  const { item } = props.route.params;
  return (
    <View style={Styles.Container}>
      <ScrollView style={Styles.AppealContainer}>
        <Image source={{ uri: item.info.thumbnail }} style={Styles.AppealImg} />
        <Text>Appeal</Text>
      </ScrollView>
    </View>
  );
};

export default Appeal;
