import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  scrollView: {
    flexDirection: "row",
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
        </Link>

        {/*  <>
          <AppBarTab onPress={onCreateReview}>Create Review</AppBarTab>
          <AppBarTab onPress={onMyReviews}>My Reviews</AppBarTab>
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
        </>
 */}
        <React.Fragment>
          <Link to="/signIn" component={AppBarTab}>
            Sign in
          </Link>
          <Link to="/signUp" component={AppBarTab}>
            Sign up
          </Link>
        </React.Fragment>
      </ScrollView>
    </View>
  );
};

export default AppBar;
