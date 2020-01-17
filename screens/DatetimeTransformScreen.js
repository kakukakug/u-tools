import * as React from 'react';
import { Button, TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';

class DatetimeTransformScreen extends React.Component {
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

  yearToEra = (m, y) => {
    if (m == 'H' && y > 0 && y < 50) return 1988 + y; //　平成
    if (m == 'S' && y > 0 && y < 65) return 1925 + y; //　昭和
    if (m == 'T' && y > 0 && y < 16) return 1911 + y; //　大正
    if (m == 'M' && y > 0 && y < 46) return 1867 + y; //　明治
  };

  transform = () => {
    let textArray = this.state.value.split('\n');
    let valueNo = textArray.length;

    let re = /([HSTM])([0-9]+)年([0-9]+)月([0-9]+)日/;
    let transformArray = textArray.map(text => {
      let result = re.exec(text);
      let y = this.yearToEra(result[1], Number(result[2]));

      return y + '/' + ('00' + result[3]).slice(-2) + '/' + ('00' + result[4]).slice(-2);
    });
    let transformedNo = transformArray.length;
    let transformText = transformArray.join('\n');

    this.setState({
      transformed: transformText,
      valueNo: valueNo,
      transformedNo: transformedNo,
      result: true,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>日付を入力</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => this.setState({ value: text })}
            value={this.state.value}
          />
          <View style={styles.formButton}>
            <Button title="変換" color="#6666d6" onPress={this.transform} />
          </View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            value={this.state.transformed}
          />
          {this.state.result === true ? (
            <Text style={styles.formNotice}>
              {this.state.valueNo}行を{this.state.transformedNo}に変換しました。
            </Text>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    backgroundColor: '#eff',
    flex: 1,
    padding: 30,
    alignSelf: 'center',
  },
  formTitle: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  formButton: {
    margin: 10,
    alignSelf: 'center',
  },
  formNotice: {
    margin: 10,
    alignSelf: 'center',
  },
});

export default DatetimeTransformScreen;
