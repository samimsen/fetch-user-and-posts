import axios from "axios"

const getData = async (userId) => {
    const getUserInfo = (await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)).data
    const getUserPosts = (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).data

    const userAndPosts = {
        user: getUserInfo,
        posts: getUserPosts
    }

    console.log(userAndPosts)
}

export default getData