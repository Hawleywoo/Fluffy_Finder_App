import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import BreedsScreen from '../Screens/BreedsScreen';
import MainMenuScreen from '../Screens/MainMenuScreen';
import BreedDetailScreen from '../Screens/BreedDetailScreen'


const BreedNavigator = createStackNavigator({
    MainMenu: MainMenuScreen,
    Breeds: BreedsScreen,
    BreedDetail: BreedDetailScreen,
});

export default createAppContainer(BreedNavigator)


// Wrap your root navigator with 'createAppNavigator' 