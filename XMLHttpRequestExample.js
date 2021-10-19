import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

 //onload is the function called when an XMLHttpRequest transaction completes successfully.
 //The onreadystatechange function is called every time the readyState changes.
const postUser= () => {
    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }
        request.onload = function(e) {
            console.log("request failed", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 201) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }
    }

    const bodyData = {
        email:"hellocody20223@gmail.com",
        name: "Cody Info",
        gender: 'Male',
        status: 'Active'
    };  

    request.open("POST", "https://gorest.co.in/public/v1/users", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send(JSON.stringify(bodyData));
}



//onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const updateUser = () => {
    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }
        request.onload = function(e) {
            console.log("request ", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 200) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }

    }

    const bodyData = {
        email:"hellocody20223@gmail.com",
        name: "Abhishek CodyInfo",
        gender: 'Male',
        status: 'Active'
    };  

    request.open("PUT", "https://gorest.co.in/public/v1/users/1609", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send(JSON.stringify(bodyData));
}

 //onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const getUser = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }

        request.onload = function(e) {
            console.log("request ", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 200) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }
    }

    request.open("GET", "https://gorest.co.in/public/v1/users", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send();
}





export default class XMLHttpRequestExample extends Component{
    render(){
        return(
            <View >
                <Text style= {{fontWeight:'bold', fontSize:20, padding:10, margin:10}}>XMLHttpRequest Networking API for your networking library/Data.
                   API Credit: GoRest https://gorest.co.in</Text>
                <View style={{margin: 10, marginTop:50, padding:20, marginHorizontal: 16}} >
                    <Button 
                        title='POST: Create User' 
                          onPress={() => postUser()}
                    />
                </View>

                <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}} >
                     <Button 
                        title='Get: Get UserList' 
                          onPress={() => getUser() }
                    />  
                </View>

                <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                        onPress={() => updateUser()}
                    />  
                </View>

                <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}} >
                     <Button 
                        title='Delete: Delete user' 
                         // onPress={() => deleteUser()}
                    />    
                </View>
            </View>
        )
    }
}




















/*
//onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const postData =  () => {
    console.log('XMLHttpRequest creating obj');
    var request = new XMLHttpRequest();

    console.log('request in ready state 1 ==', request.readyState);
    request.onreadystatechange = (e) => {
        console.log('request in ready state 1111 ==', request.readyState);
        if (request.readyState !== 4) {
            console.log('request in ready state');
            return;
        }

        request.onload = function(e) {
            console.log('Request response handling ', this.response);
            if (this.status == 200) {
                var jsonResponse = JSON.parse(this.response); // request response data / JSON response  
                console.log('response movies data', jsonResponse.data);
            }else {
                console.log('request error');
            }
        };
    };


    const bodyData = {
            email:"abh125aad@gmail.com",
            name: "Abhi",
            gender: 'male',
            status: 'active'
    };   
    
    request.open('POST', 'https://gorest.co.in/public/v1/users', true);
    console.log('request in ready state3 ==', request.readyState);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    console.log('request in ready state 3 ==', request.readyState);
    request.send(JSON.stringify(bodyData));
    console.log('request in ready state 4 ==', request.readyState);
}


const getUserList =  () => {
        console.log('Start XMLHttpRequest requesting');
        
        var request = new XMLHttpRequest();
        

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                console.log('request in ready state');
                return;
            }

            request.onload = function(e) {
                console.log('Request response handling');
                if (this.status == 200) {
                    var jsonResponse = JSON.parse(this.response); // request response data / JSON response  
                    console.log('response  data', jsonResponse);
                }else {
                    console.log('request error');
                }
            };
        };


       
        
        request.open('GET', 'https://reactnative.dev/movies.json', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
        request.send();
}



const updateUser =  () => {
    console.log('Start XMLHttpRequest requesting');
    
    var request = new XMLHttpRequest();
    

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            console.log('request in ready state');
            return;
        }

        request.onload = function(e) {
            console.log('Request response handling ', request.status);
            console.log(this.responseText);
            if (request.status >= 200 && request.status < 300) {
                // parse JSON
                const response = JSON.parse(request.responseText);
                console.log(response);
            }
        };
    };   
    
    const bodyData = {
        email:"abh125aad@gmail.com",
        name: "Abhi",
        gender: 'male',
        status: 'active'
    }
    request.open('PUT', 'https://gorest.co.in/public/v1/users/1350', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send(JSON.stringify(bodyData));
    
}


const deleteUser =  () => {
    console.log('Start XMLHttpRequest requesting');
    
    var request = new XMLHttpRequest();
    

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            console.log('request in ready state');
            return;
        }

        request.onload = function(e) {
            console.log('Request response handling');
            if (this.status == 200) {
                var jsonResponse = JSON.parse(this.response); // request response data / JSON response  
                console.log('response  data', jsonResponse);
            }else {
                console.log('request error');
            }
        };
    };


   
    
    request.open('DELETE', 'https://gorest.co.in/public/v1/users/1338', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send();
}
*/