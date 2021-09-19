import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ImageBackground, Dimensions, TouchableHighlight, Image, ScrollView, TextInput } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        pages: ['block','none', 'none','none','none','none','none'],
        currentIndex: 0,
        noteArray: [{name: 'New Note', body: 'New Body', index: 0}],
        currentNote: 0,
        currentCont: 0,
        currName: '',
        currBody: '',
        currPhName: '',
        currEmail: '',
        currNum: '',
        phoneArray: [{name: 'Contact Name', num: 'New Number', email: 'New Email', index: 0}],
    }
    displayPage = (index) => {
          let oldPageStore = [...this.state.pages];
          
          for(let i = 0; i < oldPageStore.length; i++) {
              if(oldPageStore[i] == 'block'){
                this.state.previous = i
                
              }
              oldPageStore[i] = 'none';
          }
          
          oldPageStore[index] = 'block';
          this.state.currentIndex = index,
          this.setState({pages: oldPageStore});
          
    };
    notePage = (note) => {
        this.state.currentNote = note.index;
        this.state.currName = note.name;
        this.state.currBody = note.body;
        this.displayPage(4);
    };
    phonePage = (contact) => {
        this.state.currEmail = contact.email;
        this.state.currPhName = contact.name;
        this.state.currNum = contact.num;
        this.state.currentCont = contact.index;
        this.displayPage(6);
    };
    newNote = () => {
        var newObj;
        newObj = {
            name: 'New Note',
            body: 'New Body',
            index: this.state.noteArray.length,
        }
        newObj.name = newObj.name + " " + newObj.index;
        this.state.noteArray.push(newObj);
    };
    
    newContact = () => {
        var newObj;
        newObj = {
            name: 'New Contact',
            num: 'New Number',
            email:'New Email',
            index: this.state.phoneArray.length,
        }
        newObj.name = newObj.name + " " + newObj.index;
        this.state.phoneArray.push(newObj);
    };
    _handleNameChange = currName => {
        this.setState({ currName });
    };
    _handleBodyChange = currBody => {
        this.setState({ currBody });
    };
    _handlePhNameChange = currPhName => {
        this.setState({ currPhName });
    };
    _handleEmailChange = currEmail => {
        this.setState({ currEmail });
    };
    _handleNumChange = currNum => {
        this.setState({ currNum });
    };
    savePage = () =>{
        let array = [...this.state.noteArray];
        array[this.state.currentNote].name = this.state.currName;
        array[this.state.currentNote].body = this.state.currBody;
        this.setState({ noteArray : array});
        this.displayPage(3);
    };
    saveCont = () =>{
        let array = [...this.state.phoneArray];
        array[this.state.currentCont].name = this.state.currPhName;
        array[this.state.currentCont].num = this.state.currNum;
        array[this.state.currentCont].email = this.state.currEmail;

        this.setState({ phoneArray : array});
        this.displayPage(5);
    };
    render() {
        return (
            <View style={styles.container}>
                
                <View style={{display: this.state.pages[0]}}>
                    
                    <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/adbc69a82c4bb061f8ae7f625e3b203e' }}
                    >
                        <View style={styles.container}>
                            <View style={styles.introContainer}>
                                <Text style={styles.introText}>
                                    Welcome to the Notes and Contacts App!
                                </Text>
                            </View>
                            <View style={styles.intBodyContainer}>
                                <Text style={styles.intBodyText}>
                                    Open the phone and choose which app you'd like
                                </Text>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.displayPage(1)}
                                >
                                    <View style={styles.nextContainer}>
                                        <Text style={styles.buttonText}>
                                            Next
                                        </Text>
                                    </View> 
                                </TouchableHighlight>
                                
                            </View>
                            
                        </View>
                    </ImageBackground>
                </View>
                <View style={{display: this.state.pages[1]}}>
                   
                        <View style={styles.container}>
                         <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/adbc69a82c4bb061f8ae7f625e3b203e' }}
                        >
                           <View style={styles.homeContainer}>
                                <Text style={styles.introText}>
                                    8:12 PM
                                </Text>
                                <Text style={styles.intBodyText}>
                                    January 7, 2021
                                </Text>
                            </View>
                            <View style={styles.homeBodyContainer}>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/192f2eb2f6539c534fd36f9136ba5beb' }}
                                    style={{ height: 256, width: 256 }}
                                />
                                <Text style={styles.intBodyText}>
                                    Phone is unlocked
                                </Text>
                                <Text style={styles.intBodyText}>
                                    Press the Next Page to continue
                                </Text>
                            </View>
                        
                        </ImageBackground>
                        <View style={styles.navBar}>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.previous)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Previous Page
                                    </Text>
                                </View> 
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(1)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.currentIndex+1)}
                            >
                                <View style={styles.mNavContainer}>
                                    <Text style={styles.buttonText}>
                                        Next Page
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                        </View>
                    </View>
                </View>
                <View style={{display: this.state.pages[2]}}>
                    <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/adbc69a82c4bb061f8ae7f625e3b203e' }}
                        >
                           <View style={styles.homeContainer}>
                                <Text style={styles.introText}>
                                    8:12 PM
                                </Text>
                            </View>
                            <View style={styles.homeBodyContainer}>
                                <View style={styles.appContainer}>
                                    
                                    <TouchableHighlight
                                        onPress={() => this.displayPage(3)}
                                    >
                                        <Image
                                            source={{ uri: 'https://codehs.com/uploads/7d9fce5142d49583a82f19749fa03d2e' }}
                                            style={styles.appImg}
                                        />
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={() => this.displayPage(5)}
                                    >
                                        <Image
                                            source={{ uri: 'https://codehs.com/uploads/31a6420d59060523f626a54fe5976ada' }}
                                            style={styles.appImg1}
                                        />
                                    </TouchableHighlight>
                                    
                                </View>
                            </View>
                    </ImageBackground>
                    <View style={styles.navBar}>
                        <TouchableHighlight
                            underlayColor = 'transparent'
                            onPress={() => this.displayPage(this.state.previous)}
                        >
                            <View style={styles.navContainer}>
                                <Text style={styles.buttonText}>
                                    Previous Page
                                </Text>
                            </View> 
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor = 'transparent'
                            onPress={() => this.displayPage(1)}
                        >
                            <View style={styles.navContainer}>
                                <Text style={styles.buttonText}>
                                    Home
                                </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{display: this.state.pages[3]}}>
                    <View style={styles.container}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri: 'https://codehs.com/uploads/78a73d923dd90ce0013f68d30a0d102d' }}
                        >
                            <View style={styles.noteHeader}>
                                <Text style={styles.headText}>
                                    Welcome To the Notes App!
                                </Text>
                                <Text style={styles.headText}>
                                    Add note by creating a header and a body message!
                                </Text>
                            </View>
                            <ScrollView>
                                <View style={styles.selBody}>
                                    {this.state.noteArray.map((note, index) => (
                                        <View style={styles.selNoteContainer}>
                                            <TouchableHighlight
                                                underlayColor = 'transparent'
                                                onPress={() => {this.notePage(note)}}
                                            >
                                                <Text style={styles.noteText}>
                                                    Name: {note.name}
                                                </Text>
                                            </TouchableHighlight>
                                        </View>
                                    ))}        
                                </View>
                            </ScrollView>
                        </ImageBackground>
                            <View style={styles.navBar}>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.newNote()}
                                >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            New Note
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.displayPage(this.state.currentIndex)}
                                >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            Update Page
                                        </Text>
                                    </View>
                                </TouchableHighlight> 
                            </View> 
                     
                        <View style={styles.navBar}>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.previous)}
                            >
                                <View style={styles.mNavContainer}>
                                    <Text style={styles.buttonText}>
                                        Previous Page
                                    </Text>
                                </View> 
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(1)}
                            >
                                <View style={styles.mNavContainer}>
                                    <Text style={styles.buttonText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                                       
                        </View>
                    </View>
                </View>
                    
                <View style={{display: this.state.pages[4]}}>
                    <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/78a73d923dd90ce0013f68d30a0d102d' }}
                    >
                        <View style={styles.noteHeader}>
                            <TextInput
                                value={this.state.currName}
                                multiline={true}
                                onChangeText={this._handleNameChange}
                                style={styles.headText}
                            />
                        </View>
                        <View style={styles.noteBody}>
                            <TextInput
                                value={this.state.currBody}
                                multiline={true}
                                onChangeText={this._handleBodyChange}
                                style={styles.textInput}
                            />
                        </View>
                    </ImageBackground>
                    <View style={styles.navBar}>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.previous)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Previous Page
                                    </Text>
                                </View> 
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(1)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                             <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.savePage()}
                                >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            Save Page
                                        </Text>
                                    </View>
                                </TouchableHighlight>            
                        </View>
                    
                </View>
                <View style={{display: this.state.pages[5]}}>
                    <View style={styles.darkContainer}>
                            <View style={styles.selNoteHeader}>
                                <Text style={styles.phheadText}>
                                    Welcome To the Contacts App!
                                </Text>
                                <Text style={styles.phBodyText}>
                                    Add contact by adding a name, phone number, and email!
                                </Text>
                            </View>
                            <ScrollView>
                                <View style={styles.selBody}>
                                    {this.state.phoneArray.map((contact, index) => (
                                        <View style={styles.selNoteContainer}>
                                            <TouchableHighlight
                                                underlayColor = 'transparent'
                                                onPress={() => {this.phonePage(contact)}}
                                            >
                                                <Text style={styles.phBodyText}>
                                                    Name: {contact.name}
                                                </Text>
                                            </TouchableHighlight>
                                        </View>
                                    ))}        
                                </View>
                            </ScrollView>
                            <View style={styles.navBar}>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.newContact()}
                                >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            New Note
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    underlayColor = 'transparent'
                                    onPress={() => this.displayPage(this.state.currentIndex)}
                                >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            Update Page
                                        </Text>
                                    </View>
                                </TouchableHighlight> 
                            </View> 
                     
                        <View style={styles.navBar}>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.previous)}
                            >
                                <View style={styles.mNavContainer}>
                                    <Text style={styles.buttonText}>
                                        Previous Page
                                    </Text>
                                </View> 
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(1)}
                            >
                                <View style={styles.mNavContainer}>
                                    <Text style={styles.buttonText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                                       
                        </View>
                    </View>
                </View>
                    
                <View style={{display: this.state.pages[6]}}>
                    <View style={styles.darkContainer}>
                        <View style={styles.nameHeader}>
                            <TextInput
                                value={this.state.currPhName}
                                multiline={true}
                                onChangeText={this._handlePhNameChange}
                                style={styles.phheadText}
                            />
                        </View>
                        <View style={styles.contContainer}>
                            <TextInput
                                value={this.state.currNum}
                                multiline={true}
                                onChangeText={this._handleNumChange}
                                style={styles.phheadText}
                            />
                            
                        </View>
                        <View style={styles.contContainer}>
                            <TextInput
                                value={this.state.currEmail}
                                multiline={true}
                                onChangeText={this._handleEmailChange}
                                style={styles.phheadText}
                            />
                        </View>
                        <View style={styles.phoneContainer}>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/626e65a430526dc523e4abdce5a4ddd3' }}
                                style={styles.phoneImg}
                            />
                        </View>  
                        <View style={styles.navBar}>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(this.state.previous)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Previous Page
                                    </Text>
                                </View> 
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.displayPage(1)}
                            >
                                <View style={styles.navContainer}>
                                    <Text style={styles.buttonText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor = 'transparent'
                                onPress={() => this.saveCont()}
                            >
                                    <View style={styles.mNavContainer}>
                                        <Text style={styles.buttonText}>
                                            Save Page
                                        </Text>
                                    </View>
                            </TouchableHighlight>            
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
    },
    darkContainer: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'black',
    },
    introContainer: {
        height: deviceHeight/3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    intBodyContainer: {
        height: 2*deviceHeight/3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    introText: {
        fontSize: deviceWidth/10,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    intBodyText: {
        fontSize: deviceWidth/15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nextContainer:{
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: deviceWidth/3,
        height: deviceHeight/12,
        borderWidth: 5,
        borderColor: 'darkBlue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    buttonText:{
        color: 'black',
        fontSize: deviceWidth/15,
        fontWeight: 'bold',
    },
    contactText:{
        font: 20,
        color: 'black',
        fontSize: deviceWidth/15,
        fontWeight: 'bold',
    },
    homeContainer:{
        height: 2*deviceHeight/8,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeBodyContainer: {
        height: 5*deviceHeight/8,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent:'body',
    },
    navBar:{
        height: deviceHeight/8,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    phoneImg:{
        width: 256,
        height: 256,
    },
    phoneContainer:{
        height: deviceHeight/2,
        width: deviceWidth,
        alignItems: 'center',
    },
    appContainer:{
        height: deviceHeight/3,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contContainer:{
        height: deviceHeight/8,
        width: deviceWidth,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    selNoteContainer:{
        height: deviceHeight/8,
        width: deviceWidth,
        borderBottomWidth: 2,
        borderColor: 'white',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selNoteText:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    appImg:{
        height: deviceHeight/4,
        width: deviceHeight/4,
    },
    appImg1:{
        height: deviceHeight/3.125,
        width: deviceHeight/3.125,
    },
    noteContainer:{
        height: 7*deviceHeight/8,
        width: deviceWidth,
    },
    noteHeader:{
        height:deviceHeight/8,  
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameHeader:{
        height:deviceHeight/8,  
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 2,
    },
    selNoteHeader:{
        height:deviceHeight/8,  
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    noteBody:{
        height: 6*deviceHeight/8,  
        width: deviceWidth,
        borderTopWidth: 5,
        borderColor: 'black',
    },
    noteText:{
        font: 16,
    },
    selBody:{
        height: 5*deviceHeight/8,  
        width: deviceWidth,
    },
    headText:{
        fontSize: 20,
        fontfamily: 'serif',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput:{
        height: 6*deviceHeight/8,
        width: deviceWidth,
        fontSize: 16,
        fontfamily: 'serif',
    },
    phBodyText :{
        fontSize: 14,
        fontfamily: 'serif',
        color: 'white',
        textAlign: 'center',
    },
    phheadText:{
        fontSize: 16,
        fontfamily: 'serif',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    bodyText :{
        fontSize: 15,
        fontfamily: 'serif',
    },
    phSelBodyText :{
        fontSize: 18,
        fontfamily: 'serif',
        color: 'white',
        textAlign: 'center',
    },
    mNavContainer :{
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'darkBlue',
        marginRight: 10,
    },
    navContainer :{
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'darkBlue',
    }
});