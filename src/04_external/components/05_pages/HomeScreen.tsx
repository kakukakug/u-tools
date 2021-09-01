import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      transformed: '',
      valueNo: 0,
      transformedNo: 0,
      result: false,
    };
  }

  goCompany= () => {
    this.props.navigation.navigate('Company')
  }
  goAddress  = () => {
    this.props.navigation.navigate('Address')
  }
  goDate = () => {
    this.props.navigation.navigate('Date')
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={this.goDate} style={styles.linkButton}>
              <Text style={styles.buttonText}>日付テキスト変換</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goCompany} style={styles.linkButton}>
              <Text style={styles.buttonText}>会社名変換</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goAddress} style={styles.linkButton}>
              <Text style={styles.buttonText}>住所変換</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkButton: {
    margin: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
export default HomeScreen;
