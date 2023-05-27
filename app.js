
import axios from "axios";

async function getData(number){

    const getUser = async(number) => {
        const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
        console.log("user : ", user);
    } 
   
    const getPost = async(number) => {
         const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + number);
         console.log("post : ",post);
    }
   
    const userId = await getUser(number);
    const postId = await getPost(number);
    return userId + postId;
   
}

export default getData;