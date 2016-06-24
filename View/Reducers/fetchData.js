import {
    AJAX_DATA,
    AJAX_SUCCEED,
    AJAX_FAILED,
    AJAX_RELOAD,
    UPDATE_TODO
} from '../Config/actionType'

import defaultData from '../Config/defaultData'
import Api from '../Api'

function FetchData(state = defaultData, action) {
    switch (action.type) {

        case AJAX_DATA:
            var getParas = '',
                postParas = {};
            if (action.data.method.toLowerCase() == 'get') {
                getParas = '?' + action.data.body;
            } else {
                postParas = {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json", //"text/plain",//"application/json" //"application/x-www-form-urlencoded"
                    },
                    body: action.data.body,
                    credentials: "include" //默认不带cookie，增加此参数带cookie
                }
            }
            fetch(Api[action.data.url] + getParas, postParas).then(response => {
                return response.json();
            }).then(json => {
                action.data.succeed({
                    json: json,
                    name: action.data.url
                })
                if (json.ret != 1) {
                    console.log('请求' + action.data.url + '列表错误信息：' + json.error.code + ' ' + json.error.msg);
                }
            }).catch(err => {
                console.log('请求 ' + action.data.url + ' error');
            })
            return [...state]

        case AJAX_SUCCEED:
            var actionJson = {};
            actionJson[action.data.name] = action.data.json;
            // actionJson[action.data.name][action.data.name] = true;
            var obj = Object.assign(...state, actionJson);
            // console.log(action.data.name);
            return [obj]
        case AJAX_RELOAD:
            var newObj = state[0];
            newObj.focusInfo.focus = false;
            newObj.navInfo.nav = false;
            newObj.productInfo.product = false;
            newObj.swiperInfo.swiper = false;
            var obj = Object.assign(...state, newObj);
            return [obj]

        case AJAX_FAILED:
            return [...state]

        case UPDATE_TODO:
            var obj = Object.assign(...state, action.data);
            return [obj]

        default:

            return [...state]
    }
}


module.exports = FetchData