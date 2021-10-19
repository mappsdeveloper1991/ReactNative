import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const postUser=() => {
  axios({
    method: 'post',
    url: 'https://gorest.co.in/public/v1/users',
    data:{
      email: "codylearning15a@gmail.com",
      name: "Cody Info",
      gender: 'Male',
      status: 'Active'
    },
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}



const updateUser=() => {
  axios({
    method: 'PUT',
    url: 'https://gorest.co.in/public/v1/users/1718',
    data:{
      email: "codylearning15a@gmail.com",
      name: "Abhishek Rai",
      gender: 'Male',
      status: 'active'
    },
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}



const getUser=() => {
  axios({
    method: 'get',
    url: 'https://gorest.co.in/public/v1/users',
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}







const deleteUser=() => {

}


//npm install --save axios
export default class AxiosExample extends Component{
    render(){
        return(
            <View >
                <Text style= {{fontWeight:'bold', fontSize:20, padding:10, margin:10}}>Axios Networking API for your networking library/Data.
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

axios({
        method: 'post',
        url: 'https://gorest.co.in/public/v1/users',
        data: {
          email:"hellocody202232@gmail.com",
          name: "Cody Info",
          gender: 'Male',
          status: 'Active'
         },
         headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
         }
        })
      .then(function (response) {
        // handle success
        console.log("success", JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log("error", error.message);
      });

*/