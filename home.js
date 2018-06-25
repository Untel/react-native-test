import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { GlobalStyles } from './styles';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages : {}
        };
    }

    render() {
        return (
        <View style={GlobalStyles.container}>
            <Text>Chat</Text>

            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
                />

            <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Login')}
            />
        </View>
        );
    }

    async componentDidMount(){
        const token = this.props.navigation.getParam('token');
        console.log('TOken from home page', token)
        try {
            let response;
            response = await fetch('https://cesi.cleverapps.io/messages', {
                method: 'GET',
                headers: {
                token: token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                }
            });

            if (response.status >= 200 && response.status < 300) {
                this.state.messages = await response.json();
                console.log("messages", response, this.state.messages);
            }
      
          } catch (err) {
            alert('Get messages failed. Please retry...');
            console.log("error",err);
          }
    }
}
  