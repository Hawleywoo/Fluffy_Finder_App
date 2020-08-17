import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import BreedsScreen from '../Screens/BreedsScreen';
import MainMenuScreen from '../Screens/MainMenuScreen';
import BreedDetailScreen from '../Screens/BreedDetailScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import SignUpScreen from '../Screens/SignUpScreen';
import LoginScreen from '../Screens/LoginScreen';
import FavoriteScreen from '../Screens/FavoritesScreen'
import FilterBreedsScreen from '../Screens/FilterBreedsScreen'
import BreedIdentifierScreen from '../Screens/BreedIdentifierScreen'

const BreedNavigator = createStackNavigator({
    MainMenu: MainMenuScreen,
    Breeds: BreedsScreen,
    BreedDetail: BreedDetailScreen,
    BreedIdentifier: BreedIdentifierScreen
});

const FilterNavigator = createStackNavigator({
    Filters: FilterBreedsScreen,
})

const BreedFavTabNavigator = createBottomTabNavigator({
    Main: BreedNavigator,
    Favorites: FavoriteScreen,
})
const WelcomeNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
    Login: LoginScreen,
    BreedsTab: BreedFavTabNavigator,
});



const MainNavigator = createDrawerNavigator({
    Welcome: WelcomeNavigator,
    Filters: FilterNavigator,
})

export default createAppContainer(MainNavigator)


// Wrap your root navigator with 'createAppNavigator' 
