import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
        <View style={styles.ViewStyle}>
            <Text style={styles.textStyle}>{props.HeaderText}</Text>
        </View>
    );

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export default Header;
