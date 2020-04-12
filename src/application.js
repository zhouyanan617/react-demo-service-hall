import React from 'react';
import Header from './components/Header/header';
import HomeTitle from './components/HomeTitle/HomeTitle';
import SelectProblem from './components/SelectProblem/SelectProblem';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <HomeTitle></HomeTitle>
        <SelectProblem></SelectProblem>
        <Content></Content>
        <Footer></Footer>
        <Aside></Aside>
      </React.Fragment>
    )
  }
}