import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";
import PropTypes from "prop-types";

const Tile = ({ text, textColor, backgroundColor }) => {
  const styles = StyleSheet.create({
    tile: {
      backgroundColor: "#AAB396",
      borderRadius: 30,
      padding: 5,
      alignItems: "center",
    },
  });

  return (
    <View style={styles.tile}>
      <Text style={globalStyles.text}>{text}</Text>
    </View>
  );
};

Tile.PropTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

Tile.defaultProps = {
  textColor: "",
  backgroundColor: "",
};

export default Tile;
