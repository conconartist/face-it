import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Eco from '../Category/Eco';
import Vegan from '../Category/Vegan';
import AllergenFriendly from '../Category/AllergenFriendly';
import Nav from '../Nav/Nav';
import LoadingMessage from '../Loading/Loading';
import Logo from '../Logo/Logo';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Items from '../Items/Items';
import SearchResults from '../SearchResults/SearchResults';
import Details from '../Details/Details';
import apiCalls from '../../apiCalls';

class App extends Component {
  constructor(){
    super();
    this.state = {
      makeup: [],
      vegan: [],
      allergenFriendly: [],
      eco: [],
      filteredMakeup: [],
      isFetching: true,
      isSearching: false,
      error: false,
    }
  }

//if a developer
//change line 38 to: apiCalls.getLocalData()
//when preparing a feature for a build change line 38 to: apiCalls.getApiData()

  componentDidMount(){
    apiCalls.getLocalData()
      .then((data) => {
        this.setState({
          makeup: data,
        });
        this.sortByCategory(this.state.makeup);
        this.setState({isFetching: false});
      })
      .catch((err) => {
        this.setState({error: true, isFetching: false})
      });
  }

  searchMakeup = userInput => {
    const filteredByTag = [];
    if(userInput !== '') {
    this.state.makeup.forEach(item => {
      const tags = item['tag_list'].map(tag => tag.toLowerCase());
      if(tags.includes(userInput)) {
        filteredByTag.push(item)
      }
    })
    const filterWithBrand = this.state.makeup.filter(item => item.brand)
    const filteredByBrand = filterWithBrand.filter(item => {
      return item.brand.toLowerCase().includes(userInput)
    })
    const uniqueFilteredMakeup = [...new Set(filteredByTag.concat(filteredByBrand))]
    this.setState({filteredMakeup: uniqueFilteredMakeup, isSearching: true})
    }
  }

  sortByCategory = response => {
    const crueltyFree = response.filter(item => item['cruelty_free'] === 1);
    const fairTrade = response.filter(item => item['fair_trade'] === 1);
    const organic = response.filter(item => item['organic'] === 1);
    const vegan = response.filter(item => item['vegan'] === 1);
    const zeroWaste = response.filter(item => item['zero_waste'] === 1);
    this.setState({
      isSearching: false,
      filteredMakeup: [],
      crueltyFree: crueltyFree,
      fairTrade: fairTrade,
      organic: organic,
      vegan: vegan,
      zeroWaste: zeroWaste
    });
  }

  handleClick = () => {
    this.setState({
      isSearching: false,
      filteredMakeup: [],
    });
  }

  render() {
    return (
      <main>
        <Nav handleClick={this.handleClick} />
        {this.state.isFetching && <LoadingMessage />}
        <Route exact path='/error' render={() => <Error />} />
          <Route
            exact
            path='/searchResults'
            render={() => {
               return <SearchResults filteredMakeup={this.state.filteredMakeup} />
            }}
          />
          <Route
            exact
            path='/searchResults/:id'
            render={({ match }) => {
              return (
                <Details makeup={this.state.makeup} id={match.params.id} />
                );
              }}
          />
          <Route
            exact
            path='/'
            render={() => {
              if (!this.state.makeup.length && this.state.error) {
                return <Redirect to='/error' />;
              } else if (
                this.state.filteredMakeup.length !== 0 &&
                this.state.isSearching
                ) {
                  return <Redirect to='/searchResults' />;
              } else if(
                this.state.filteredMakeup.length === 0 &&
                this.state.isSearching
                ) {
                  return (
                    <div className='searchMessageContainer'>
                      <h2>Sorry! Your search returned no results.</h2>
                    </div>
                  )
                } else  {
                  return (
                    <div className='App'>
                    <Form searchMakeup={this.searchMakeup}/>
                    <div className='titleContainer'>
                      <h1>FaceIt</h1>
                      <Logo />
                      <h2 className='missionStatement'>
                        Discover beauty products that compliment your lifestyle.
                      </h2>
                    </div>
                    <section className='categoryContainer'>
                      <Link to='/eco'>
                        <article
                          className='mainCategory'
                          style={{
                            backgroundImage: `url(${'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'})`,
                          }}
                        >
                          <h3 className='mainCategoryText'>Eco</h3>
                        </article>
                      </Link>
                      <Link to='/allergenFriendly'>
                        <article
                          className='mainCategory'
                          style={{
                            backgroundImage: `url(${'https://images.unsplash.com/photo-1586445781752-63b964aa0404?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'})`,
                          }}
                        >
                          <h3 className='mainCategoryText'>
                            Allergen Friendly
                          </h3>
                        </article>
                      </Link>
                      <Link to='/vegan'>
                        <article
                          className='mainCategory'
                          style={{
                            backgroundImage: `url(${'https://images.unsplash.com/photo-1509298271096-c979b9203fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1212&q=80'})`,
                          }}
                        >
                          <h3 className='mainCategoryText'>Vegan</h3>
                        </article>
                      </Link>
                    </section>
                  </div>
                );
              }
            }}
          />

          <Route
            exact
            path='/:category'
            render={({ match }) => {
              if (match.params.category === 'vegan') {
                return <Vegan vegan={this.state.vegan} />;
              } else if (match.params.category === 'allergenFriendly') {
                return (
                  <AllergenFriendly
                    allergenFriendly={this.state.allergenFriendly}
                  />
                );
              } else if (match.params.category === 'eco') {
                return <Eco eco={this.state.eco} />;
              }
            }}
          />

          <Route 
           exact 
           path='/:category/:type'
           render={({ match }) => {
              if(match.params.category === 'vegan') {
                return (
                  <Items
                    data={this.state.vegan}
                    type={match.params.type}
                    category={match.params.category}
                 />
                )
              } else if(match.params.category === 'eco') {
                return (
                  <Items
                    data={this.state.eco}
                    type={match.params.type}
                    category={match.params.category}
                  />
                )
              } else if(match.params.category === 'allergenFriendly') {
                return (
                  <Items
                    data={this.state.allergenFriendly}
                    type={match.params.type}
                    category={match.params.category}
                  />
                )
              }        
           }}
          />

          <Route
            exact
            path='/:category/:type/:id'
            render={({ match }) => {
              return (
                <Details makeup={this.state.makeup} id={match.params.id} />
              );
            }}
          />
        <Footer />
      </main>
    );
  }
}

export default App;
