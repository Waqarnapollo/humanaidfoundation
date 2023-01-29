import { HtmlText } from "@e-mine/react-native-html-text";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "../utils/Style";
import * as Progress from "react-native-progress";

const Appeal = (props) => {
  const { item } = props.route.params;
  return (
    <View style={Styles.Container}>
      <ScrollView style={Styles.AppealContainer}>
        <Image source={{ uri: item.info.thumbnail }} style={Styles.AppealImg} />
        <Text style={Styles.AppealTitle}>{item.info.title} </Text>
        <Progress.Bar
          progress={0.3}
          width={null}
          height={10}
          style={Styles.ProgressBar}
          color="rgb(49,49,147)"
        />
        <HtmlText>{item.info.content}</HtmlText>
        {/* <Text>{item.info.content}</Text> */}
      </ScrollView>
    </View>
  );
};

export default Appeal;
