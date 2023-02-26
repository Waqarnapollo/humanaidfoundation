import { Picker } from "@react-native-picker/picker";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Styles } from "../utils/Style";
import { useNavigation } from "@react-navigation/native";

export const AppealForm = (props) => {
  const { title } = props.route.params;
  const [email, setEmail] = useState("");
  const [selectAmount, setSelectAmount] = useState();
  const { confirmPayment, loading } = useConfirmPayment();
  const [card, setCard] = useState();
  const navigation = useNavigation();

  const fetchPaymentIntentClientSecret = async () => {
    var clientSecrets;
    await axios
      .post(
        "https://app.thehumanaidfoundation.com/api/stripe",
        {
          amount: selectAmount,
          currency: "gbp",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        console.log(res.data);
        clientSecrets = res.data;
      });

    return clientSecrets;
  };

  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: "waqarmughal005@gmail.com",
      description: title,
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();
    // const clientSecret = await fetchPaymentIntentClientSecret();

    console.log(clientSecret);

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodType: "Card",
      paymentMethod: { card },
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      console.log("Payment confirmation error", error);
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Warning",
        textBody:
          "Details are incorrent. Please add correct details or try again later",
        button: "close",
      });
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Success",
        textBody: "Thank you very much for your donation.",
        button: "close",
      });

      navigation.navigate("Home");
    }
  };

  return (
    <>
      {loading ? (
        <ActivityIndicator
          color="#fff"
          style={Styles.preloader}
          visible={loading}
        />
      ) : (
        ""
      )}
      <View style={Styles.Container}>
        <View style={Styles.AppealFormInner}>
          <Text style={Styles.AppealFormTitle}>{title}</Text>

          <Text style={Styles.PreText}>Select an Amount:</Text>

          <Picker
            selectedValue={selectAmount}
            onValueChange={(itemValue, itemIndex) => setSelectAmount(itemValue)}
            style={Styles.AppealFormSelector}
          >
            <Picker.Item label="50" value="50" />
            <Picker.Item label="100" value="100" />
            <Picker.Item label="150" value="150" />
            <Picker.Item label="200" value="200" />
            <Picker.Item label="250" value="250" />
            <Picker.Item label="500" value="500" />
          </Picker>

          <Text style={Styles.PreTextCenter}>or</Text>

          <Text style={Styles.PreText}>Add a Custom Amount::</Text>
          <TextInput
            style={Styles.AppealFormInput}
            value={selectAmount}
            onChangeText={setSelectAmount}
          />

          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={{
              backgroundColor: "#FFFFFF",
              textColor: "#000000",
            }}
            style={{
              width: "100%",
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              console.log("cardDetails", setCard(cardDetails));
            }}
            onFocus={(focusedField) => {
              console.log("focusField", focusedField);
            }}
          />

          <TouchableOpacity
            style={Styles.AppealDonateBtn}
            onPress={handlePayPress}
          >
            <Text style={Styles.DonateBtnText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
