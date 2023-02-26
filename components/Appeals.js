import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../utils/Style";
import axios from "axios";

const Appeals = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://thehumanaidfoundation.com/give-api/v1/forms/", {
        params: {
          key: "5f80a070713cad85150e97277d25adc6",
          token: "ed24e89df98de2ff91f7ddf062d218bd",
        },
      })
      .then((success) => {
        const formdata = success.data.forms;
        setForm(formdata);
        setLoading(false);
      });
  }, []);

  const Item = ({ index, item, plainContent, onPress }) => {
    return (
      <TouchableOpacity key={index} style={Styles.AppealsBg} onPress={onPress}>
        <View style={Styles.Cause}>
          <Image
            source={{ uri: item.info.thumbnail }}
            style={Styles.AppealsImg}
          />
          <View style={Styles.Content}>
            <Text style={Styles.AppealsTitle}>
              {item.info.title.length > 75
                ? item.info.title.substring(0, 75 - 3) + "..."
                : item.info.title}
            </Text>
            <Text style={Styles.AppealsDescription}>
              {plainContent.length > 100
                ? plainContent.substring(0, 100 - 3) + "..."
                : plainContent}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item, index }) => {
    const plainContent = item.info.content.replace(/<[^>]+>/g, "");

    const Appeal = (item) => {
      navigation.navigate("Appeal", {
        item: item,
      });
    };

    return (
      <Item
        key={index}
        item={item}
        onPress={() => Appeal(item)}
        plainContent={plainContent}
      />
    );
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
        <FlatList
          data={form}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default Appeals;
