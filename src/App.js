import { useState } from 'react';
import style from './App.module.css';
import AddItems from './components/shopingList/mainScreen/addItems/addItems';
import ListName from './components/shopingList/mainScreen/descriptionShopingList/description';
import InputDone from './components/shopingList/mainScreen/inputDone/inputDone';
import SideMenuContainer from './components/shopingList/sideMenu/SideMenuContainer';

const App = () => {
  const [state, setstate] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false
      }
      setstate([...state, newItem])
    }
  }

  const removeTask = (id) => {
    setstate([...state.filter((state) => state.id !== id)])
  }

  const handleToggle = (id) => {
    setstate([...state.map((state) => state.id === id ? { ...state, complete: !state.complete } : { ...state })])
  }
  return (
    <main className={style.container}>
      <article>
        <div className={style.mainScreen}>
          <ListName />
          <div className="mainScreen_items">
            <AddItems addTask={addTask} />
            {state.map((state) => {
              return (
                <InputDone key={state.id} state={state} removeTask={removeTask} handleToggle={handleToggle} />
              )
            })}
          </div>
        </div>
      </article>
      <aside>
        <SideMenuContainer />
      </aside>
    </main>
  );
}

export default App;
