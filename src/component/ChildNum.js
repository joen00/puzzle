import {useSelector} from 'react-redux'
import styled, {css} from 'styled-components';
import React from 'react';
import {darken, lighten} from 'polished';


const TmpButton = styled.button`

    color: black;
    border:none;
    cursor:pointer;
    font-size: 1.5rem;

    ${props => {
        const recvWidth=props.width || "6";
        const recvHeigth=props.height || "6";
        const recvColor = props.color || "rgb(136, 211, 170)";
        
        return css`
            width : ${recvWidth}rem;
            height :  ${recvHeigth}rem;
            background-color: ${recvColor};

            &:hover {
                background-color: ${lighten(0.1,recvColor)};
            }
            &:active {
                background-color: ${darken(0.1,recvColor)};
            }
        `;     
    }}

`;


const ChildNum =(state)=>{
    return (
        <div>
          <TmpButton onClick={state.onClicked} value={state.i} id={state.index}>{state.i}</TmpButton>
        </div>
      );

}

export default ChildNum;