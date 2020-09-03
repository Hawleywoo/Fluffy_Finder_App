# Fluffy Finder

## Table of Contents

- [](#)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Intro Video](#intro-video)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)
  
## General Info

The Fluffy Finder is a full-stack application made with Ruby on Rails, React Native and TensorFlow.js that allows users to search through breeds, 
use a image from camera roll or take an image with camera to classify the breed.

## Intro Video
 [Fluffy Finder Demo](https://www.youtube.com/watch?v=mG36I8YvCnc)

## Capstone Flatiron Project by Andrew Hawley

    -Tensorflowjs - 2.3.0
    -Rails - 6.0.3.1
    -Postgresql
    -React Native

## Code Examples
  ```
     return (
        <View style={styles.screen}>
            <Text style={styles.titleHeader} >Welcome {user ? user.username :  'to Fluffy Finder' }!</Text>
            {isCarouselReady
                ? <MyCarousel style={styles.carousel} dogs={filteredBreed} />
                : <ActivityIndicator size='large' />
            }
            <Text style={styles.header}>Main Menu</Text>
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'Breeds',
                            params: {
                                breedsData: breedsData
                            }
                        })
                    }}>
                    <Text style={styles.menuText}>List of Breeds</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        props.navigation.navigate({
                            routeName: 'BreedIdentifier',
                            params: {
                                breedsData: breedsData
                            },
                        })
                    }}
                >
                    <Text style={styles.menuText}>Breed Identifier</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => { props.navigation.navigate('BreedIdentifier') }}>
                    <Text style={styles.menuText} >Favorite Breeds </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

  ```
## Features

    -Allows users to browser through a list of breeds.
    -Allows users to see each breed's details.
    -Allows users to classify dog breeds with an image from camera roll.
    -Allows users to classify dog breeds by taking a picture.

## To-Do List

    -Refactor “code smell”
    -filter dog breeds by group or temperament.
    -Change navigation to drawer navigation
    -add icons


## Contact

Created by [Andrew Hawley](https://www.linkedin.com/in/andrew-hawley-695299182/)

Feel free to contact me!
