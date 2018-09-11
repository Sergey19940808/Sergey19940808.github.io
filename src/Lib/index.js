import axios from 'axios';

const store = {
    friends: [],
    isAuth: 'false',
    user: 'Сергей'
}

const pathUser = {
    domen: 'https://api.vk.com/method/users.get',
    fields: 'bdate',
    v: 5.84
}

const pathUserFriends = {
    domen: 'https://api.vk.com/method/friends.get',
    order: 'count',
    count: 5,
    v: 5.84,
    fields: 'nickname'

}

export const setStorage = (token, isAuth, userId) =>  {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('isAuth', isAuth);
    localStorage.setItem('userId', userId);
}
export const setStorageDate = () =>  {
    axios.get(`${pathUser.domen}?user_ids=${localStorage.getItem('userId')}&fields=${pathUser.fields}&access_token=${localStorage.getItem('accessToken')}&v=${pathUser.v}`).then(res=> {
        localStorage.setItem('user', res.data.response[0].first_name);
    });
    axios.get(`${pathUserFriends.domen}?user_id=${localStorage.getItem('userId')}&access_token=${localStorage.getItem('accessToken')}&order=${pathUserFriends.order}&count=${pathUserFriends.count}&fields=${pathUserFriends.fields}&v=${pathUserFriends.v}`).then(res=>localStorage.setItem('friends', JSON.stringify(res.data.response.items)));
}
export const getStorage = () => {
    return {
        friends: JSON.parse(localStorage.getItem('friends')) === null ? 
            store.friends 
            : 
            JSON.parse(localStorage.getItem('friends'))
        ,
        isAuth: localStorage.getItem('isAuth') === null ? 
            store.isAuth
            : 
            localStorage.getItem('isAuth')
        ,
        user: localStorage.getItem('user') === null ? 
            store.user
            : 
            localStorage.getItem('user')
    } 
}
