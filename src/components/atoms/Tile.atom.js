import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../../constants/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from '../../constants/colors'

const Tile = ({
  text,
  textColor = colors.black,
  backgroundColor = colors.shades.gray.Silver
}) => {
  const styles = StyleSheet.create({
    text: {
      color: textColor
    },
    tile: {
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderRadius: 30,
      margin: 3,
      padding: 10
    }
  })

  return (
    <View style={styles.tile}>
      <Text style={[globalStyles.text, styles.text]}>{text}</Text>
    </View>
  )
}

Tile.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Tile
