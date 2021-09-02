import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class FlexPreviewScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      flexDirection:'none',
      justifyContent:'none',
      alignItems:'none',
      flexWrap:'none',
      flex:'none',
      alignContent:'none',
      alignSelf:'none',
      text:'none',
      flexGrow:'none',
      flexShrink:'none',
      flexBasis:'none',
      text:'child',
      tab:false,
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'React Native flex style creater',
    headerTinColor:'white',
    haderLeft: (
      <Icon name="bars" size={24} onPress={()=>{navigation.openDrawer()}} style={{color:'#999',padding:20}}/>
    ),
  });

  // スタイルを整形して返す、初期値noneのものは削除する
  _createStyle = (propObj) => {
    let style = {}
    for( var key in propObj) {
      if(propObj[key] != 'none') {
        if(['flex','flexGrow','flexShrink'].includes(key)){
          style[key] = Number(propObj[key])
        }else if('flexBasis' === key && propObj[key] != 'auto'){
          style[key] = Number(propObj[key])
        }else{
          style[key] = propObj[key]
        }
      }
    }
    return style;
  }

  previewChild =  (data) => {
    return(
      <View style={[styles.children,
        this._createStyle({
          flex:this.state.flex,
        }),
        (data.no == 2) ? this._createStyle({
          flexGrow:this.state.flexGrow,
          flexShrink:this.state.flexShrink,
          flexBasis:this.state.flexBasis,
          alignSelf:this.state.alignSelf,
        }):{},
      ]}>
        <Text style={[styles.previewText,(data.no==2)?{color:'#e77'}:{}]}>{this.state.text}-{data.no}</Text>
      </View>
    )
  }
  previewContainer = () => {
    return (
      <View style={[styles.parent,
        this._createStyle({
          flexDirection:this.state.flexDirection,
          justifyContent:this.state.justifyContent,
          alignItems:this.state.alignItems,
          flexWrap:this.state.flexWrap,
          alignContent:this.state.alignContent,
        })
      ]}>
        <this.previewChild no={1} />
        <this.previewChild no={2} />
        <this.previewChild no={3} />
        <this.previewChild no={4} />
      </View>
    )
  }

  settingComponent = (data) => {
    return (
      <View style={styles.flexRow}>
        <Text style={styles.stylePropText}>{data.name}</Text>
        <Picker
          selectedValue={this.state[data.name]}
          style={styles.picker}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue, itemIndex) => this.setState({ [data.name]: itemValue })}>
          {data.selectArray.map((name,index)=>{
            return (<Picker.Item label={name} value={name} key={index}/>)
          })}
        </Picker>
      </View>
    )
  }
  customerContainer = () => {
    return (
      <View style={styles.customerContainer}>
        <View style={styles.parentCustomer}>
          <Text style={styles.h1Text}>Parent</Text>
          <this.settingComponent
            name={'flexDirection'}
            selectArray={['none','column','row','column-reverse','row-reverse']}
          />
          <this.settingComponent
            name={'justifyContent'}
            selectArray={['none','flex-start','center','flex-end','space-around','space-between','space-evenly']}
          />
          <this.settingComponent
            name={'alignItems'}
            selectArray={['none','flex-start','center','flex-end','stretch']}
          />
          <this.settingComponent
            name={'flexWrap'}
            selectArray={['none','nowrap','wrap','wrap-reverse']}
          />
          <this.settingComponent
            name={'alignContent'}
            selectArray={['none','flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']}
          />
        </View>
        <View style={styles.childCustomer}>
          <Text style={styles.h1Text}>Children</Text>
          <this.settingComponent
            name={'text'}
            selectArray={['child','long text. mega super long text contents']}
          />
          <this.settingComponent
            name={'flex'}
            selectArray={['none','1','2']}
          />
          <Text style={styles.h2Text}>only <Text style={{color:'#e77'}}>Child-2</Text> style prop</Text>
          <this.settingComponent
            name={'flexGrow'}
            selectArray={['none','0','1','2','3']}
          />
          <this.settingComponent
            name={'flexShrink'}
            selectArray={['none','1','2','3']}
          />
          <this.settingComponent
            name={'flexBasis'}
            selectArray={['none','auto','10','20','30']}
          />
          <this.settingComponent
            name={'alignSelf'}
            selectArray={['none','auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']}
          />
        </View>
      </View>
    )
  }


  _styleTextFormat = (obj)=>{
    let styleObj=this._createStyle(obj);
    let ret = '';
    for(var key in styleObj){
      if(typeof styleObj[key] === "string"){
        ret += '    '+key+': "'+styleObj[key]+'"'+",\n"
      }else{
        ret += '    '+key+': '+styleObj[key]+",\n"
      }
    }
    return ret;
  }
  createStyleText = () =>{
    let parent,children,child2;
    parent = this._styleTextFormat({
          flexDirection:this.state.flexDirection,
          justifyContent:this.state.justifyContent,
          alignItems:this.state.alignItems,
          flexWrap:this.state.flexWrap,
          alignContent:this.state.alignContent,
        })
    children = this._styleTextFormat({
          flex:this.state.flex,
        })
    child2 = this._styleTextFormat({ 
          flexGrow:this.state.flexGrow,
          flexShrink:this.state.flexShrink,
          flexBasis:this.state.flexBasis,
          alignSelf:this.state.alignSelf,
        })
    return (
`  parent: {
    flex: 1,
${parent}
  },
  chidren: {
${children}
  },
  child-2: {
${child2}
  },`)
  }

  tabBarComponent = () =>{
    if(this.state.tab == false){
      return(
        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity style={styles.openButton} onPress={()=>{this.setState({tab:true})}} >
            <Text style={styles.tabBarInfoText}>open style text</Text>
          </TouchableOpacity>
        </View>
      )
    }else{
      let styleText=this.createStyleText()
      return(
        <View style={styles.tabBarInfoContainer}>
          <TextInput
            style={styles.tabBarStyleForm}
            multiline = {true}
            editable={false}
            value={styleText}
          />
          <TouchableOpacity style={styles.openButton} onPress={()=>{this.setState({tab:false})}} >
            <Text style={styles.tabBarInfoText}>close</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.createrContainer}>
            <Text style={styles.subTitleText}>Preview</Text>
            <this.previewContainer />
            <Text style={styles.subTitleText}>Property selecter</Text>
            <this.customerContainer />
          </View>
        </ScrollView>
        <this.tabBarComponent />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems:'center',
  },
  createrContainer: {
    flex: 1,
    padding: 10,
    maxWidth:400,
  },
  customerContainer: {
    flex: 3,
    flexDirection:'row',
  },

  parentCustomer: {
    flex: 1,
    backgroundColor:'#eee',
    paddingHorizontal: 4,
  },
  childCustomer: {
    flex: 1,
    borderWidth:1,
    borderColor:'#ccc',
      paddingHorizontal: 4,
  },

  parent: {
    backgroundColor:'#ccc',
    padding: 10,
    flex: 1,
  },
  children: {
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#666',
    padding: 2,
  },
  previewText: {
    color: '#444',
  },


  styleProp: {
    borderWidth:1,
  },


  flexRow: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingHorizontal:4.
  },


  titleText: {
    fontSize: 20,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    paddingTop:6,
  },
  h1Text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    textAlign: 'center',
  },
  h2Text: {
    fontSize: 12,
    color: '#333',
    lineHeight: 20,
    textAlign: 'center',
    paddingTop:6.
  },
  stylePropText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal:6.
  },

  picker: {
    height: 20, 
    width: 60 ,
    borderRadius: 4,
  },
  pickerItem: {
  },


  openButton: {
    width:"100%"
  },

  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth:1,
    borderColor:'#666',
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 6,
  },
  tabBarInfoText: {
    fontSize: 15,
    paddingVertical: 5,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  tabBarStyleForm: {
    fontSize: 12,
    width:'80%',
    height:250,
    padding: 5,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:4,
    textAlignVertical:'top',
  },
});
