import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet ,TouchableOpacity, ScrollView,Modal} from 'react-native';
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

// formik
import { Formik } from 'formik';
// Styled components
import {
    Colors,
    UserSettingContainer,
    Lefttextorange,
    Headsticker,
    UserTextInput,
    ImageContainer,
    UpperLefttextorange,
    Labeltext,
    UserFormArea,
    TOPLabeltext,
    BottomLabeltext,
    UserBottomTextInput,
} from './../components/styles'

//colors
const {brand, darklight,holderwords, primary, orange} = Colors;

const Frequency= '一周一次,一個月一次,三個月一次,半年一次,永不提醒'.split(',');




const Setting = ()=>{
    
    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const startDate = getFormatedDate(
      "YYYY/MM/DD"
    );
    const [selectedStartDate, setSelectedStartDate] = useState("");
    const [startedDate, setStartedDate] = useState("01/01/2024");
  
    function handleChangeStartDate(propDate) {
      setStartedDate(propDate);
    }
  
    const handleOnPressStartDate = () => {
      setOpenStartDatePicker(!openStartDatePicker);
    };   
    
    

    return (
        
        <UserSettingContainer>
            <View style={{width: '100%', height: '20%',backgroundColor: 'white'}}>
                <Lefttextorange>吳執行長</Lefttextorange>    
            </View>
            <ImageContainer>
            <StatusBar style='dark'/>
            <Headsticker resizeMode = 'cover' source={require('./../assets/Frame1.png')}/>
            <View style={{ width: '100%', height: '10%',top:'5%' }}>
                <UpperLefttextorange>提醒設定</UpperLefttextorange>
            </View> 
            </ImageContainer>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',top:'34%'}}>
                <TouchableOpacity 
                    style={{backgroundColor:'#fff',padding:10,borderRadius:10,height:'170%',width:'85%'}}
                    >
                    <View style={{flexDirection: 'row',  alignItems: 'center' }}>
                        <Text style={{fontSize:17,alignItems:'flex-start'}}>提醒頻率</Text>
                        
                        </View>
                </TouchableOpacity>
                
            </View>
            

            <View style={{ width: '100%', height: '2%',top:'40%'}}>
                <UpperLefttextorange>個人設定</UpperLefttextorange>
            </View> 
            
            
            <Formik
                initialValues={{name: '', userid: '',Houseaddress:'', Correspondenceaddress:'',Phonenumber:''}}
                    onSubmit={(values)=>{console.log(values);}}
                >   
                  {({handleChange, handleBlur, handleSubmit, values})=>(<UserFormArea>
                    
                    <TOPTextInput 
                        style = {{borderTopRightRadius: 10}}
                        label = '        姓名'
                        placeholder ='        請輸入您的姓名'
                        placeholderTextColor = {holderwords}          
                        onChangeText = {handleChange('name')}
                        onBlur = {handleBlur('name')}
                        value = {values.name}
                        backgroundColor = 'white'
                    />

                    <TouchableOpacity
                        style={{backgroundColor:'#fff',padding:10,height:'170%',width:'85%'}}
                        onPress={handleOnPressStartDate}>
                        <Text>{selectedStartDate}</Text>


                    </TouchableOpacity>


                    <MyTextInput 
                        label = '    身分證'
                        placeholder ='    請輸入您的身分證'
                        placeholderTextColor = {holderwords}
                        onChangeText = {handleChange('userid')}
                        onBlur = {handleBlur('userid')}
                        value = {values.userid}
                        backgroundColor = 'white'
                        keyboardType = 'email-address'
                        
                    />
                    <MyTextInput 
                        label = '戶籍地址'
                        placeholder ='請輸入您的戶籍地址'
                        placeholderTextColor = {holderwords}
                        onChangeText = {handleChange('Houseaddress')}
                        onBlur = {handleBlur('Houseaddress')}
                        value = {values.Houseaddress}
                        backgroundColor = 'white'
                    />
                    <MyTextInput 
                        label = '通訊地址'
                        placeholder ='請輸入您的通訊地址'
                        placeholderTextColor = {holderwords}
                        onChangeText = {handleChange('Correspondenceaddress')}
                        onBlur = {handleBlur('Correspondenceaddress')}
                        value = {values.Correspondenceaddress}
                        backgroundColor = 'white'
                    />
                    <BottomTextInput 
                        label = '手機號碼'
                        placeholder ='請輸入您的手機號碼'
                        placeholderTextColor = {holderwords}
                        onChangeText = {handleChange('Phonenumber')}
                        onBlur = {handleBlur('Phonenumber')}
                        value = {values.Phonenumber}
                        backgroundColor = 'white'
                        style = {{borderBottomRightRadius: 10}}
                    />
                    
                    <View style={{ width: '100%', height: '8%',top:'10%' }}>
                        <UpperLefttextorange>提醒設定</UpperLefttextorange>
                    </View>

             </UserFormArea>)}

                     
             </Formik>
            
            
             

             <Modal
                animationType="slide"
                transparent={true}
                visible={openStartDatePicker}
            >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />

                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>




             
             </UserSettingContainer>
            
        
        
        
           
          
            
                
                
       
        


        
        
  )

    
}

const MyTextInput = ({ label, ...props }) => {
    return (
        <View style={{flexDirection:'row',height:'20%'}}>
            <Labeltext>{label}</Labeltext>
            
            <UserTextInput {...props} />
            
        </View>
        
    );
}

const TOPTextInput = ({ label, ...props }) => {
    return (
        <View style={{flexDirection:'row',height:'20%'}}>
            <TOPLabeltext>{label}</TOPLabeltext>
            
            <UserTextInput {...props} />
            
        </View>
        
    );
}

const BottomTextInput = ({ label, ...props }) => {
    return (
        <View style={{flexDirection:'row',height:'20%'}}>
            <BottomLabeltext>{label}</BottomLabeltext>
            
            <UserBottomTextInput {...props} />
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20, 
      marginTop: 40, 
    },
    rightText:{
        left:180,
        fontSize:18,
        color:'gray',
        
    },
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },

    modalView: {
        margin: 20,
        backgroundColor: "#080516",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 35,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        }
    });

export default Setting;

