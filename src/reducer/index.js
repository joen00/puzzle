import {CHANGEVALUE,SHOWRESULT,START,CHANGEBUTTON1,CHANGEBUTTON2} from "../action/index";

const initState = {
    Num :{
        0:1,
        1:2,
        2:3,
        3:4,
        4:5,
        5:6,
        6:7,
        7:8,
        8:0,
    },
    key1:0, 
    key2:0, 
    result:"",
    value1:0,
    value2:0,
    value3:0,
    value4:0,
    value5:0,
    value6:0,
    value7:0,
    value8:0,
    value9:0,
    b1:1,
    b2:1,

}

const reducer = (state = initState,action)=>{ 
    switch(action.type) { 
        case SHOWRESULT:
            return {...state, result:action.result};
        case START:
            let k1=action.value1;
            let k2=action.value2;
            let k3=action.value3;
            let k4=action.value4;
            let k5=action.value5;
            let k6=action.value6;
            let k7=action.value7;
            let k8=action.value8;
            let k9=action.value9;
            state.Num[0]=k1;
            state.Num[1]=k2;
            state.Num[2]=k3;
            state.Num[3]=k4;
            state.Num[4]=k5;
            state.Num[5]=k6;
            state.Num[6]=k7;
            state.Num[7]=k8;
            state.Num[8]=k9;
            return {...state, Num:state.Num};
        case CHANGEVALUE:
            let k=action.key1;
            let t=action.key2;           
            [state.Num[k],state.Num[t]]=[state.Num[t],state.Num[k]];
            return {...state, Num:state.Num};
        case CHANGEBUTTON1:
            return {...state, b1:action.b1};
        case CHANGEBUTTON2:
            return {...state, b2:action.b2};
        default:   
            return state;
    }
}

export default reducer;