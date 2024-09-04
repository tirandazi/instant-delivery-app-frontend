import { Platform, StyleSheet } from 'react-native'
import { colors } from './colors'

export const globalStyles = StyleSheet.create({
  boxShadow: {
    ...Platform.select({
      android: {
        elevation: 10
      },
      ios: {
        shadowColor: '#333333',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 5,
          height: 5
        }
      }
    })
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.appDefaults.background,
    flex: 1,
    justifyContent: 'center'
  },
  h1: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontWeight: '700'
  },
  h2: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '700'
  },
  h3: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700'
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 16
  }
})
