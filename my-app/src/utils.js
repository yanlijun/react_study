

export async function commRequest(promise, cb, prv, fina) {
    typeof prv === 'function' && prv();
    try {
        const re = await promise;
        typeof cb === 'function' && cb(re)
    } catch (e) {
        console.log(e.message)
    } finally {
        typeof fina === 'function' && fina()
    }
}

export default function request(url, ops = {}) {
    const requestUrl = 'http://test.node.17shihui.com' +
        (url.indexOf('/') === 0 ? url : '/' + url);
    return fetch(requestUrl, {credentials: 'include', ...ops}).then(
        response => response.json()
    ).then((data) => {
        return data.result ? data.result : data
    }).catch((err) => {
        throw err
    })
}
