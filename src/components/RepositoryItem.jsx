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
    borderRadius: theme.borderRadius,
    padding: 5,
    backgroundColor: theme.colors.primary,
    color: "white",
  },
  statContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-between",
  },
  marginBottom: {
    marginBottom: 8,
  },
  amountText: {},
});

const addThousandsAbbr = (value) => {
  if (value < 1000) return value;
  return Math.round((value / 1000) * 10) / 10 + "k";
};

const InfoContainer = ({
  name,
  description,
  language,
  forks,
  stars,
  rating,
  reviews,
}) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.marginBottom} fontWeight="bold" fontSize="subheading">
        {name}
      </Text>
      <Text style={styles.marginBottom} color="textSecondary">
        {description}
      </Text>
      <Text style={[styles.languagePill, styles.marginBottom]}>{language}</Text>
      <StatContainer
        forks={forks}
        stars={stars}
        rating={rating}
        reviews={reviews}
      />
    </View>
  );
};

const StatContainer = ({ forks, stars, rating, reviews }) => {
  return (
    <View style={styles.statContainer}>
      <Stat name="Stars" value={stars} />
      <Stat name="Forks" value={forks} />
      <Stat name="Reviews" value={reviews} />
      <Stat name="Rating" value={rating} />
    </View>
  );
};

const Stat = ({ name, value }) => {
  return (
    <View>
      <Text
        fontWeight="bold"
        fontSize="subheading"
        style={[styles.marginBottom, styles.amountText]}
      >
        {addThousandsAbbr(value)}
      </Text>
      <Text>{name}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: repository.ownerAvatarUrl }}
        />
        <InfoContainer
          name={repository.fullName}
          description={repository.description}
          language={repository.language}
          forks={repository.forksCount}
          stars={repository.stargazersCount}
          rating={repository.ratingAverage}
          reviews={repository.reviewCount}
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
