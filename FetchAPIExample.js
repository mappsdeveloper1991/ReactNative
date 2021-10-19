
import React, {Component} from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';



const getMoviesFromApi = () => {
    console.log('Fetch API Call');

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name:"Abhi",
            OS: "Android"
        })
    };

    fetch('https://reactnative.dev/movies.json', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.movies);
        console.log('Fetch API Response', json.title);
        console.log('Fetch API Response', json.description);
    })
    .catch((error) => {
      console.error(error);
    });
}




const postUser =  () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
        body: JSON.stringify({ 
            email:"abh125aad@gmail.com",
            name: "Abhi",
            gender: 'male',
            status: 'active'
        })
    };

    fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}


const getUsers =  () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
    };

    fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
        console.error(error);
      });

}

const UpdateUser =  () => {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
        body: JSON.stringify({ 
            email:"cody3@gmail.com",
            name: "Abhi Rai",
            gender: 'male',
            status: 'inactive'
        })
    };

    fetch('https://gorest.co.in/public/v1/users/8969', requestOptions)
    .then((response) => response.json())
    .then((json) => {
        console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const deleteUser =  () => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
    };

    fetch('https://gorest.co.in/public/v1/users/8986', requestOptions)
    .then(response => response.ok)
    .catch((error) => {
        console.error(error);
      });
    

}







export default class FetchAPIExample extends Component{

    render(){
        return(
            <View >
                <Text style= {{fontWeight:'bold', fontSize:20, padding:10, margin:10}}>Fetch API for your networking Data.
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
                          onPress={() => getUsers()}
                    />  
                </View>

                <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                          onPress={() => UpdateUser()}
                    />  
                </View>

                <View style={{margin: 10, marginTop:20, padding:20, marginHorizontal: 16}} >
                     <Button 
                        title='Delete: Delete user' 
                          onPress={() => deleteUser()}
                    />    
                </View>
            </View>
        )
    }

    
    
}













 // async is used to make a function asynchronous. 
   //The await keyword will ask the execution to wait until the defined task gets executed. It allows the use of await Keyword inside the functions with async keyword
   // API Credit: GoRest https://gorest.co.in/
   const getMoviesFromApiSimple = async () => {
       try{
            const response = await fetch('https://reactnative.dev/movies.json');
            console.log('API status code: ', response.status);
            console.log('API status msg: ', response.responseText);
            console.log('API status: ', response.ok);

            const json = await response.json();
            console.log('API response: ', json.movies);
            return json.movies;
        }catch (error) {
            console.log('API failed to connet' , error);
            console.error(error);
        }
  }


  const getMoviesFromApiWithAsyncAndAwit = async () => {
    const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      console.log('success', json.movies);
      return json.movies;
  };



  const getMoviesFromApiWithMethodTypeAndHeader = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    
    const response = await fetch('https://reactnative.dev/movies.json', requestOptions);
      const json = await response.json();
      console.log('success', json.movies);
      return json.movies;
  };


  const userPost = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408'},
        body: JSON.stringify({
            name: 'Abhishek',
            email: 'myemail1@gmail.com',
            gender: 'male',
            status: 'active'
          })
    };
    
    const response = await fetch('https://gorest.co.in/public/v1/users', requestOptions);
      const json = await response.json();
      console.log('success', json.data);
      return json.movies;
  };