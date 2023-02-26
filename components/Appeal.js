import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "../utils/Style";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { HtmlText } from "@e-mine/react-native-html-text";

const Appeal = (props) => {
  const navigation = useNavigation();
  const { item } = props.route.params;
  let percentage = item.goal.percentage_completed;
  percentage = percentage / 100;

  const DonateForm = () => {
    navigation.navigate("AppealForm", {
      title: item.info.title,
    });
  };

  return (
    <View style={Styles.Container}>
      <ScrollView style={Styles.AppealContainer}>
        <Image source={{ uri: item.info.thumbnail }} style={Styles.AppealImg} />
        <Text style={Styles.AppealTitle}>{item.info.title}</Text>
        <View style={Styles.Goal}>
          <View>
            <Text style={Styles.GoalRaised}>Goal Raised:</Text>
            <Text style={Styles.GoalRaised}>£{item.stats.total.earnings}</Text>
          </View>
          <View>
            <Text style={Styles.DonationGoal}>Donation Goal:</Text>
            <Text style={Styles.DonationGoal}>£{item.goal.amount}</Text>
          </View>
        </View>
        <Progress.Bar
          progress={percentage}
          width={null}
          height={10}
          style={Styles.ProgressBar}
          color="rgb(49,49,147)"
          borderWidth={0}
          unfilledColor="rgba(49,49,147,0.3)"
        />
        <HtmlText>{item.info.content}</HtmlText>
        <TouchableOpacity style={Styles.AppealDonateBtn} onPress={DonateForm}>
          <Text style={Styles.DonateBtnText}>Donate Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Appeal;
