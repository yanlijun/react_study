import fetch from 'dva/fetch';

export default function request(url, cb) {
    fetch(url, {credentials: 'include'}).then(
        response => response.json()
    ).then((data) => {
        typeof cb === 'function' && cb(data.result);
    }).catch((err) => {
        throw err
    })
}
