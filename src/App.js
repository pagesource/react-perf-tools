import React, { Profiler, Suspense } from 'react';

import Add from './components/organisms/add'
import List from './components/organisms/list'
import useToDoState from './hooks/useToDoState'
import Heading from './components/atoms/heading'
import { clockPerformance } from './utils/utils'

import './App.scss';

const Banner = React.lazy(() => import('./components/organisms/banner'));

function App() {
  const {
    list,
    addTask,
    updateStatus,
    removeItem
  } = useToDoState();
  return (
    <main className="app">
      <header className="app__header">
        <Heading type="h2" className="app__header__heading">TO-DO</Heading>
      </header>
      <section className="app__section">
        <Profiler id="Add-Component" onRender={clockPerformance}>
          <Add addTask={addTask} />
        </Profiler>

        <Profiler id="List-Component" onRender={clockPerformance}>
          <List list={list} updateStatus={updateStatus} removeItem={removeItem} />
        </Profiler>

        <Profiler id="Banner-Component" onRender={clockPerformance}>
          <Suspense fallback={<h4>Loading...</h4>}>
            <Banner addTask={addTask} />
          </Suspense>
        </Profiler>
      </section>
    </main >
  );
}

export default React.memo(App);
