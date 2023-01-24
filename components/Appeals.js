import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../utils/Style";
import Cause from "./Cause";

const Appeals = () => {
  return (
    <ScrollView style={Styles.Container}>
      <Cause />
    </ScrollView>
  );
};

export default Appeals;
