import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../constants/colors'
import { globalStyles } from '../constants/styles'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileScreen from '../screens/ProfileScreen'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const RootNavigator = () => {
  const tabIconSelector = (focused, name, color, size) => {
    return focused ? (
      <Ionicons name={name} color={color} size={size} />
    ) : (
      <Ionicons name={`${name}-outline`} color={color} size={size} />
    )
  }

  const styles = StyleSheet.create({
    headerBg: { backgroundColor: colors.appDefaults.header },
    headerTitleColor: { color: colors.white }
  })

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: [styles.headerBg, globalStyles.boxShadow],
          headerTitleAlign: 'center',
          headerTitleStyle: [globalStyles.h2, styles.headerTitleColor],
          tabBarActiveTintColor: colors.appDefaults.bottomTab,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home')
              return tabIconSelector(focused, 'home', color, size)
            else if (route.name === 'Profile')
              return tabIconSelector(focused, 'person-circle', color, size)
          }
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerTitle: 'Product Catalog' }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{ headerTitle: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
