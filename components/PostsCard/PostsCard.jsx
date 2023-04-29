import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./PostsCard.styles.js";
import { selectPosts, selectComments } from "../../redux/data/selectors";

const PostsCard = ({
  postId,
  name,
  adress,
  coordinate,
  uri,
  mapClick,
  commentClick,
  setLike,
}) => {
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  const selectedPost = posts.filter((post) => post.postId === postId);
  const totalLikes = selectedPost[0].likes.length;
  const totalComments = comments.filter(
    (comment) => comment.postId === postId
  ).length;
  return (
    <View>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{ uri }} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.detailsBox}>
        <View style={styles.activityBox}>
          <View style={styles.activity}>
            <Text onPress={() => commentClick(postId, uri)}>
              <Feather
                name="message-circle"
                size={24}
                color={totalComments > 0 ? "#FF6C00" : "#BDBDBD"}
              />
            </Text>
            <Text>{totalComments}</Text>
          </View>
          <View style={styles.activity}>
            <TouchableOpacity
              onPress={() => setLike(postId)}
              activeOpacity={0.8}
            >
              <Feather
                name="thumbs-up"
                size={24}
                color={totalLikes > 0 ? "#FF6C00" : "#BDBDBD"}
              />
            </TouchableOpacity>
            <Text>{totalLikes}</Text>
          </View>
        </View>
        <Text style={styles.location} onPress={() => mapClick(coordinate)}>
          <Feather
            style={styles.icon}
            name="map-pin"
            size={24}
            color="#BDBDBD"
          />
          <Text>{adress}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PostsCard;