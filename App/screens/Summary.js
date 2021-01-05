import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';

import { Button } from '../components/Button';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#36B1F0',
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    message: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
    },
    score: {
        marginTop: 20,
        color: '#fff',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: -0.02,
        fontWeight: '600',
    },
    safearea: {
        flex: 1,
        marginTop: 100,
    },
    buttonContainerFailed: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "space-between"
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "center"
    }
});

class Summary extends React.Component {
    state = {
        correctCount: this.props.navigation.getParam('numberCorrect'),
        totalCount: this.props.navigation.getParam('totalQuestions'),
    };

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.navigation.getParam('color') }]}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView style={styles.safearea}>
                    <View>
                        <Text style={styles.score}>{`${this.state.correctCount}/${this.state.totalCount}`}</Text>
                    </View>
                    <View marginTop='15%'>
                        <Text style={styles.message}>
                            {this.state.correctCount === this.state.totalCount ? 'NICE!' : 'NEXT TIME!'}
                        </Text>
                    </View>
                    {this.state.correctCount !== this.state.totalCount
                        ? <View style={styles.buttonContainerFailed}>
                            <Button
                                text='Try Again'
                                onPress={() => this.props.navigation.popToTop()}
                            />
                            <Button
                                text="Done"
                                onPress={() => this.props.navigation.popToTop()}
                            />
                        </View>
                        : <View style={styles.buttonContainer}>
                            <Button
                                text="Done"
                                onPress={() => this.props.navigation.popToTop()}
                            />
                        </View>}
                </SafeAreaView>
            </View>
        );
    }
}

export default Summary;