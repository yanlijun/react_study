import Request from './utils'


/**
 * 获取用户信息
 * @returns {Object}
 */
export async function getAccountInfo() {
    return Request('/p/operate/api/bankroll/account', { method: 'GET' })
}
