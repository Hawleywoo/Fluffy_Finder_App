import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { scrollInterpolator, animatedStyles } from '../utilities/Animations';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

export default class MyCarousel extends React.Component {

    state = {
        name: '',
    }


    // constructor(props) {
    //     super(props);
    //     this._renderItem = this._renderItem.bind(this)
    // }

    _renderItem({ item }) {
        return (
            <View style={styles.breedContainer} >
                <ImageBackground style={styles.itemContainer} imageStyle={{borderRadius: 15}} source={{ uri: item.image_url }} >
                <Text style={styles.itemLabel}>{`${item.name}`}</Text>
                </ImageBackground>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container} >
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={this.props.dogs}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    inactiveSlideShift={0}
                    onSnapToItem={(item) => this.setState({ name: '' })}
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={animatedStyles}
                    useScrollView={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    carouselContainer: {
        paddingTop: 40,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    breedContainer: {
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10, 
    },
    itemLabel: {
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 100,
        color: 'white',
        fontSize: 24,
        backgroundColor: 'hsla(100, 20%, 20%, .3)',
        borderRadius: 30,
    },
    counter: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    }
});