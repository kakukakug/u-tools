import * as React from 'react';
import { Button, TextInput, SafeAreaView, StyleSheet, Text, View } from 'react-native';

class DatetimeTransformScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      transformed: '',
      transformPlus: '',
      valueNo: 0,
      transformedNo: 0,
      result: false,
      errorMessage: '',
    };
  }

  warekiToEra = (m, y) => {
    if (y === '元') {
      y = 1;
    } else {
      y = Number(y);
    }
    if ((m == 'R' || m == '令和') && y > 0 && y < 50) return 2018 + y; //　令和
    if ((m == 'H' || m == '平成') && y > 0 && y < 50) return 1988 + y; //　平成
    if ((m == 'S' || m == '昭和') && y > 0 && y < 65) return 1925 + y; //　昭和
    if ((m == 'T' || m == '大正') && y > 0 && y < 16) return 1911 + y; //　大正
    if ((m == 'M' || m == '明治') && y > 0 && y < 46) return 1867 + y; //　明治
  };

  transform = () => {
    let error = '';
    let errorMessage = '';
    let textArray = this.state.value.split('\n');
    let valueNo = textArray.length;

    let re = /([HSTMR]|平成|昭和|大正|明治|令和)?([0-9元]+)[年.\/]([0-9]+)[月.\/]([0-9]+)[日.]*/;
    let transformArray = textArray.map((text, index) => {
      text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => {
        return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
      });
      let result = re.exec(text);
      if (result == null) {
        error = error + (index + 1) + ',';
        return '';
      }
      let y = '';
 
      console.log(result)
      if(result[1] === undefined){
        y =  result[2];
      }else{
        y = this.warekiToEra(result[1], result[2]);
      }

      return y + '/' + ('00' + result[3]).slice(-2) + '/' + ('00' + result[4]).slice(-2);
    });
    let transformedNo = transformArray.length;

    let plusRe = /([0-9]+)\/([0-9]+)\/([0-9]+)/;
    let transformPlus = transformArray.map(text => {
      let result = plusRe.exec(text);
      if (result == null) {
        return '';
      }
      return (Number(result[1])+5) + '/' + ('00' + result[2]).slice(-2) + '/' + ('00' + result[3]).slice(-2);
    });

    let transformText = transformArray.join('\n');
    let transformPlusText = transformPlus.join('\n');

    if (error != '') {
      errorMessage = error + '行について変換できなかった可能性が有ります。';
    } else {
      errorMessage = '';
    }

    this.setState({
      transformed: transformText,
      valueNo: valueNo,
      transformedNo: transformedNo,
      result: true,
      errorMessage: errorMessage,
      transformPlus: transformPlusText,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.pageTitle}>日付テキスト変換フォーム</Text>
          <Text style={styles.formTitle}>日付を入力してください。</Text>
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
          <Text style={styles.formSubTitle}>5年後</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={4}
            value={this.state.transformPlus}
            placeholder="変換結果に5年足したもの"
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

export default DatetimeTransformScreen;
