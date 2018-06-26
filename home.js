import React from 'react';
import { StyleSheet, Text, View, Button, List, ListItem, FlatList  } from 'react-native';
import { GlobalStyles } from './styles';
// import { List, ListItem, FlatList } from 'react-native-elements'
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            tests: [
                {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
                },
                {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
                },
            ]
        };
    }

    render() {
        return (
        <View style={GlobalStyles.container}>
            <Text>Messages</Text>
            <FlatList
                data={this.state.messages}
                renderItem={({item}) => (
                    <View style={GlobalStyles.row}>
                        <View>
                            <Text>{ item.username }</Text>
                            <Text>{ item.message }</Text>
                        </View>
                        <View>
                            <Text>{ new Date(item.date).toLocaleDateString() }</Text>
                        </View>
                    </View>
                )}
                />
        </View>
        );
    }

    renderRow (rowData, sectionID) {
        return (
          <ListItem
            key={sectionID}
            title={rowData.name}
            subtitle={rowData.message}
          />
        )
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
                this.setState({ messages: await response.json() });
                console.log("messages", response, this.state.messages);
            }
      
          } catch (err) {
            alert('Get messages failed. Please retry...');
            console.log("error",err);
          }
    }
}
  