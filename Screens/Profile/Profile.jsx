import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectPosts } from "../../redux/data/selectors";
import { addLike } from "../../redux/data/operations";
import { View, Text } from "react-native";
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import styles from "./Profile.styles.js";
import Loader from "../../components/Loader";
import HeaderButton from "../../components/Button/Button";
import PostsCard from "../../components/PostsCard/PostsCard";
import { signout } from "../../redux/auth/operations";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userId, nickName } = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const postsFiltred = posts.filter((post) => post.author.userId === userId);
  const logOut = () => dispatch(signout());
  const mapView = (coordinate) => navigation.navigate("Map", coordinate);
  const commentView = (postId, uri) =>
    navigation.navigate("Comments", { postId, uri });
  const setLike = (postId) => dispatch(addLike({ postId, userId }));

  return (
    <>
      <Loader />
      <Container>
        <Avatar />
        <View style={styles.logOut}>
          <HeaderButton name={"log-out"} onPress={logOut} />
        </View>
        <Text style={styles.profileTitle}>{nickName}</Text>
        <View style={styles.list}>
          {postsFiltred.map(({ postId, name, adress, coordinate, uri }) => (
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
      </Container>
    </>
  );
};

export default ProfileScreen;