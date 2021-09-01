import * as React from 'react';
import { Button, TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';

class CompanyNameTransformScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      transformed: '',
      valueNo: 0,
      transformedNo: 0,
      result: false,
      errorMessage: '',
    };
  }

  transform = () => {
    let error = '';
    let errorMessage = '';
    let textArray = this.state.value.split('\n');
    let valueNo = textArray.length;

    let transformArray = textArray.map((text, index) => {
      if (text === '') {
        error = error + (index + 1) + ',';
        return '';
      }
      text = text.replace(/(.*)[\(（]株[\)）](.*)/, '$1株式会社$2');
      text = text.replace('㈱', '株式会社');

      text = text.replace(/(.*)[\(（]有[\)）](.*)/, '$1有限会社$2');
      text = text.replace('㈲', '有限会社');

      text = text.replace(/(.*)[\(（][合同][\)）](.*)/, '$1合同会社$2');
      text = text.replace(/(.*)[\(（]資[\)）](.*)/, '$1合資会社$2');

      text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
      text = text.replace(/　/g, ' ');
      return text;
    });
    let transformedNo = transformArray.length;
    let transformText = transformArray.join('\n');
    if (error != '') {
      errorMessage = error + '行が変換出来なかった可能性が有ります。';
    } else {
      errorMessage = '';
    }

    this.setState({
      transformed: transformText,
      valueNo: valueNo,
      transformedNo: transformedNo,
      result: true,
      errorMessage: errorMessage,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.pageTitle}>会社名変換フォーム</Text>
          <Text style={styles.formTitle}>会社名を入力してください。</Text>
          <Text style={styles.formSubTitle}></Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => this.setState({ value: text })}
            value={this.state.value}
            placeholder="改行で複数のデータを入力できます"
          />
          <View style={styles.formButton}>
            <Button title="変換" color="#6666d6" onPress={this.transform} />
          </View>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            value={this.state.transformed}
            placeholder="変換結果が出力されます"
          />
          {this.state.result === true ? (
            <Text style={styles.noticeText}>
              {this.state.valueNo}行を{this.state.transformedNo}行に変換しました。
              {this.state.errorMessage}
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
    backgroundColor: '#ddd',
  },
  pageTitle: {
    padding: 10,
    fontSize: 20,
  },
  form: {
    backgroundColor: '#fffffe',
    flex: 1,
    padding: 30,
    alignSelf: 'center',
  },
  formTitle: {
    paddingHorizontal: 5,
  },
  formSubTitle: {
    padding: 5,
    fontSize: 10,
    color: '#666',
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  formButton: {
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
  noticeText: {
    margin: 10,
    alignSelf: 'center',
    width:200,
  },
});

export default CompanyNameTransformScreen;
