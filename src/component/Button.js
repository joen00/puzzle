import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';
import {useSelector,useDispatch} from 'react-redux';
import {start,cbutton1,cbutton2} from '../action/index';

let s=1;
let c=1;

const ButtonDiv = styled.div`

    margin-top: 1rem;
    display: grid;
    justify-content: center;

`;

const TmpButton = styled.button`

    color: white;
    background-color: rgb(45, 51, 43);
    font-size: 1rem;
    border-radius: 12px;
    margin-top: 15px;

    ${props => {
        const recvWidth=props.width || "10";
        const recvHeigth=props.height || "4";
        const recvColor = props.color || "rgb(45, 51, 43)";


            return css`
                width : ${recvWidth}rem;
                height :  ${recvHeigth}rem;
                background-color: ${recvColor};

                &:hover {
                    background-color: ${lighten(0.5,recvColor)};
                }
                &:active {
                    background-color: ${darken(0.1,recvColor)};
                }
            `;

    
    }}

`;

let getNumbers=function(){
    const t = [1,2,3,4,5,6,7,8,9];
    const candidate = [1,2,3,4,5,6,7,8,0];
    const temp = [];
    let newArr=t.map((i)=>{
        const chosen = candidate.splice(Math.floor(Math.random() * (10-i)), 1)[0];
        temp.push(chosen);
    })
    return temp;
}

let disorder=function(){
    const n=getNumbers();
    let a=0;
    for(let i = 0; i < 8; i += 1) {
        for(let j = i+1; j < 9; j += 1) {
            if(n[i]==0)continue;
            if(n[j]==0)continue;
            if(n[i]>n[j]){
                a=a+1;
            }
        }
    }
    if(a%2==0){
        return n;
    }
    else{
        return disorder();
    }
}

const Button=(state)=>{
    let states = useSelector(state => state);
    const dispatch = useDispatch();
    
    const onClicked=(e)=>{  
        const target1 = document.getElementById('correct');
        target1.disabled = false;
        const target2 = document.getElementById('start');
        target2.disabled = true;

        let randomdata=disorder();
        dispatch(start(
            randomdata[0],
            randomdata[1],
            randomdata[2],
            randomdata[3],
            randomdata[4],
            randomdata[5],
            randomdata[6],
            randomdata[7],
            randomdata[8],
        ));
        dispatch(cbutton1(0));
        dispatch(cbutton1(1));

    }   

    const onClickes=(e)=>{   
        const target1 = document.getElementById('correct');
        target1.disabled = true;
        const target2 = document.getElementById('start');
        target2.disabled = false;

        let correctdata=[];
        correctdata=[1,2,3,4,5,6,7,0,8];
        dispatch(start(
            correctdata[0],
            correctdata[1],
            correctdata[2],
            correctdata[3],
            correctdata[4],
            correctdata[5],
            correctdata[6],
            correctdata[7],
            correctdata[8],
        ));
        dispatch(cbutton1(1));
        dispatch(cbutton1(0));
    }  

    // console.log(states.cbutton1);
    // console.log(states.cbutton2);
    
    return (
        <React.Fragment>
            <ButtonDiv><TmpButton id="start" s={states.cbutton1} onClick={onClicked}>시작</TmpButton><TmpButton s={states.cbutton2} id="correct" onClick={onClickes}>초기화</TmpButton></ButtonDiv>
        </React.Fragment>
      );

}

export default Button;