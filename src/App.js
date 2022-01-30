import React,{lazy, Suspense} from 'react';
import './App.css';
import Todo from './components/Todo'
import PureComp from './components/PureComp'
import FuncComp from './components/FuncComp'
import HookEg from './components/HookEg'
import  {MyContext} from './components/MyContext'
import DebouceComp from './components/DebounceComp'
import ThroattleComp from './components/ThroattleComp'
//import LaztComp from './components/LazyComp'
import CustEventComp from './components/CustomEvent'

const LaztComp = lazy(()=> import('./components/LazyComp')) 


function App() {
  return (
    <div className="App">
      <MyContext.Provider value='yoyo bantai rapper'>
         <Todo/>
      </MyContext.Provider>
        <PureComp value={'hello props'}/>
        <FuncComp value={'props value'}/>
        <HookEg/>
        <Suspense fallback={<div>Loading...</div>}>
          <LaztComp/>
        </Suspense>
        <br/>
        <DebouceComp/>
        <ThroattleComp/>
        <CustEventComp/>
    </div>
  );
}

export default App;
