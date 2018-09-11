const pathToken = {
    domen: 'http://192.168.0.7:36583/proxy-redirect',
    client_id: 6688393,
    display: 'page',
    response_type: 'token',
    v: 5.84
}

export const pathAuth = `https://oauth.vk.com/authorize?client_id=${pathToken.client_id}&redirect_uri=${pathToken.domen}&response_type=${pathToken.response_type}&v=${pathToken.v}`;