//모든 상태를 보관하는 장소, 가상으로 있는 곳
import {createStore} from 'redux';    //스토어 생성을 위한 모듈
import reducer from "../reducer/index"; //스토어에서 실질적으로 일 할 리덕스 import

const store = createStore(reducer);  // 스토어 생성

export default store;  