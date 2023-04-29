import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, addLike } from "../../redux/data/operations";
import styles from "./Posts.styles";
import { View, ScrollView, SafeAreaView, RefreshControl } from "react-native";
import PostsCard from "../../components/PostsCard/PostsCard";
import UserCard from "../../components/UserCard/UserCard";
import { selectPosts } from "../../redux/data/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { selectIsLoading } from "../../redux/prestate/selectors";

const Posts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const posts = useSelector(selectPosts);
  const mapView = (coordinate) => navigation.navigate("Map", coordinate);
  const commentView = (postId, uri) =>
    navigation.navigate("Comments", { postId, uri });
  const setLike = (postId) => {
    dispatch(addLike({ postId, userId }));
    dispatch(getPosts());
  };
  const onRefresh = () => {
    dispatch(getPosts());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor={"#FF6C00"}
            progressBackgroundColor={"inherit"}
            colors={["#FF6C00"]}
          />
        }
      >
        <View style={styles.list}>
          <UserCard />
          {posts.map(({ postId, name, adress, coordinate, uri }) => (
            <PostsCard
              key={postId}
              postId={postId}
              name={name}
              adress={adress}
              coordinate={coordinate}
              uri={uri}
              mapClick={mapView}
              commentClick={commentView}
              setLike={setLike}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;