import { useState, useEffect } from 'react';
// import Button from './Button';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all time');
  //deps가 비어있으면 처음 렌더링 될 때만 실행됨
  useEffect(() => {
    console.log('i run only once');
  }, []);
  //keyword가 바뀔때만 effect 안에 있는 코드(useEffect의 첫번쨰 인자)를 실행하고 싶으면 useEffect 함수에서 Deps(useEffect의 두 번쨰 인자)에 해당 변수넣기
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('Search for', { keyword });
    }
  }, [keyword]);
  //button이 클릭될 때마다 실행
  useEffect(() => {
    console.log('coutner changes');
  }, [counter]);
  //keyword나 counter 바뀔 때 마다 실행
  useEffect(() => {
    console.log('keyword, counter changes');
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
