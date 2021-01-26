import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux"

const DisplayArticlesList = ({ navigation, article }) => {
  const { credentials } = useSelector(state => state)

  return (
    <TouchableOpacity
      onPress={() => {
<<<<<<< HEAD
        navigation.navigate("SingleArticle", { article: article })
=======
        if (credentials) {
          navigation.navigate("SingleArticle", { article: article })
        } else {
          alert("HISS! Please sign in to read an article!")
        }
>>>>>>> 2015bf8a77356bc386581e0c324a1752acb55806
      }}
    >
      <Image
        source={{ uri: article.image }}
<<<<<<< HEAD
        defaultSource={{
          uri:
            "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg",
        }}
=======
>>>>>>> 2015bf8a77356bc386581e0c324a1752acb55806
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>{article.title}</Text>
<<<<<<< HEAD
        <Text
          style={styles.lead}>
          {article.lead}
        </Text>
=======
        <Text style={styles.lead}>{article.lead}</Text>
>>>>>>> 2015bf8a77356bc386581e0c324a1752acb55806
        <Text style={styles.created}>{article.created}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayArticlesList;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    backgroundColor: "rgba(14, 13, 13, 0.6)",
  },
  title: {
    color: "white",
    fontSize: 30,
  },
  lead: {
    color: "white",
    fontSize: 16,
  },
  created: {
    color: "white",
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 3,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
});
