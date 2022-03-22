import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  pltform
} from "react-native";
// import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constents/Colors";
import { Platform } from "react-native";

const CategoriesScreen = (props) => {
  const renderGrideItems = (itemData) => {
    return (
      // <View style={styles.screen}>
      //   <Text>The Categories Screen!</Text>
      //   <Button
      //     title='Go to Meal'
      //     onPress={() => {
      //       props.navigation.navigate({ routeName: "CategoryMeals" });
      //     }}
      //   />
      // </View>

      <TouchableOpacity
        style={styles.gridItemStyle}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            }
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      // key={(item, index) => item.id}
      data={CATEGORIES}
      renderItems={renderGrideItems}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor:Platform.OS === "android" ? Colors.primaryColor: "white",
  },
  headerTintColor:Platform.OS === "android" ? "white" : Colors.primaryColor ,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItemStyle: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
