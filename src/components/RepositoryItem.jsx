import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  infoContainer: {
    display: "flex",
    paddingLeft: 20,
    flexShrink: 1,
  },
  languagePill: {
    alignSelf: "flex-start",
    borderRadius: 5,
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: "white",
  },
});

const InfoContainer = ({ name, description, language }) => {
  return (
    <View style={styles.infoContainer}>
      <Text fontWeight="bold" fontSize="subheading">
        {name}
      </Text>
      <Text color="textSecondary">{description}</Text>
      <Text style={styles.languagePill}>{language}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      <InfoContainer
        name={repository.fullName}
        description={repository.description}
        language={repository.language}
      />
    </View>
  );
};

export default RepositoryItem;
