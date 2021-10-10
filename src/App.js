import React from 'react';
import ParentNum from './component/ParentNum';
import Button from './component/Button';

//컴포넌트들 (여기서 import해도 됨)
const App=()=> {
  return (
    //여기 안에 자식을 넣음 숫자 출력, 위 아래 버튼, ..
    <React.Fragment>
      <Button/>
      <ParentNum/>
    </React.Fragment>
  );
}

//작성한 파일을 다른 파일에서 쉽게 쓰기 위해 모듈(하나의 프로그램)로 (압축을 해줌)

//default는 파일당 한개만 가능
export default App;

// //여러개 가능 - 메인이 아닌 서브
// export const App;
//index.js로 보낼 때
//import {App,sum등등} from './App';
