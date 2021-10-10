export const CHANGEVALUE="CHANGEVALUE";
export const SHOWRESULT="SHOWRESULT";
export const START="STRAT";
export const CHANGEBUTTON1="CHANGEBUTTON1";
export const CHANGEBUTTON2="CHANGEBUTTON2";

export const changeValue=(v1,v2)=>({
    type : CHANGEVALUE,
    key1 : v1,
    key2 : v2,
});

export const showResult=(v)=>({
    type : SHOWRESULT,
    result:v,
});

export const start=(v1,v2,v3,v4,v5,v6,v7,v8,v9)=>({
    type : START,
    value1:v1,
    value2:v2,
    value3:v3,
    value4:v4,
    value5:v5,
    value6:v6,
    value7:v7,
    value8:v8,
    value9:v9,
});

export const cbutton1=(v1)=>({
    type : CHANGEBUTTON1,
    b1 : v1,
});
export const cbutton2=(v1)=>({
    type : CHANGEBUTTON2,
    b2 : v1,
});