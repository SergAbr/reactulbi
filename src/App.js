import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';

function App() {
        const [posts, setPosts] = useState ([
          {id:1, title: 'Javascript', body:'Description'},
          {id:2, title: 'Javascript', body:'Description'},
          {id:3, title: 'Javascript', body:'Description'},
        ])

  return (
  <div className = 'App'>
    <form>
      <MyInput type="text" placeholder="Назвавание поста"/>
      <MyInput type="text" placeholder="Описание поста"/>
      <MyButton disabled>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title ="Список постов 1"/>
  </div>
  );
}

export default App;

