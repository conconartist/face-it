import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import Eco from '../Category/Eco';
import Vegan from '../Category/Vegan';
import AllergenFriendly from '../Category/AllergenFriendly';
import Nav from '../Nav/Nav';
import LoadingMessage from '../Loading/Loading';
import Logo from '../Logo/Logo';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Items from '../Items/Items';

class App extends Component {
  constructor(){
    super();
    this.state = {
      makeup: [],
      vegan: [],
      allergenFriendly: [],
      eco: [],
      isFetching: true, 
      error: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/api/v1/makeup")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          makeup: data,
        });
        this.sortByCategory(this.state.makeup);
        this.setState({isFetching: false});
      })
      .catch((err) => {
        this.setState({error: true, isFetching: false})
        console.log("error")
      });
  }


  sortByCategory = response => {
    const vegan = response.filter(item => item["tag_list"].includes('Vegan'));
    const eco = response.filter(
      (item) =>
        item["tag_list"].includes("EWG Verified") ||
        item["tag_list"].includes("purpicks") ||
        item["tag_list"].includes("CertClean") ||
        item["tag_list"].includes("EcoCert") ||
        item["tag_list"].includes("USDA Organic") ||
        item["tag_list"].includes("Non-GMO") ||
        item["tag_list"].includes("Organic")
    );
    const allergenFriendly = response.filter(
      (item) =>
        item["tag_list"].includes("Dairy Free") ||
        item["tag_list"].includes("Gluten Free") ||
        item["tag_list"].includes("Hypoallergenic") ||
        item["tag_list"].includes("Peanut Free Product") ||
        item["tag_list"].includes("alcohol free") ||
        item["tag_list"].includes("silicone free")
    )

    this.setState({ vegan: vegan })
    this.setState({ eco: eco })
    this.setState({ allergenFriendly: allergenFriendly });
  }

  render() {
    return (
      <main>
        <Nav />
        {this.state.isFetching && <LoadingMessage />}
        <Route exact path='/' render={() => {
          if(!this.state.makeup.length && this.state.error) {
            return <Redirect to='/error' />
          } else {
            return (
              <div className="App">
                <div className="titleContainer">
                  <h1>FaceIt</h1>
                  <Logo />
                  <h2 className="missionStatement">Discover beauty products that compliment your lifestyle.</h2>
                </div>
                <section className="categoryContainer">
                  <Link to="eco">
                    <article
                      className="mainCategory"
                      style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"})`,
                      }}
                    >
                      <h3 className="mainCategoryText">Eco</h3>
                    </article>
                  </Link>
                  <Link to="allergenFriendly">
                    <article
                      className="mainCategory"
                      style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1586445781752-63b964aa0404?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"})`,
                      }}
                    >
                      <h3 className="mainCategoryText">Allergen Friendly</h3>
                    </article>
                  </Link>
                  <Link to="vegan">
                    <article
                      className="mainCategory"
                      style={{
                        backgroundImage: `url(${"https://images.unsplash.com/photo-1509298271096-c979b9203fd7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1212&q=80"})`,
                      }}
                    >
                      <h3 className="mainCategoryText">Vegan</h3>
                    </article>
                  </Link>
                </section>
              </div>
            );
            }
          }
          }/>

          <Route
            exact
            path='/:category'
            render={({ match }) => {
              if (match.params.category === 'vegan') {
                return <Vegan vegan={this.state.vegan}/>
              } else if (match.params.category === 'allergenFriendly') {
                return <AllergenFriendly allergenFriendly={this.state.allergenFriendly}/>
              } else if (match.params.category === 'eco') {
                return <Eco eco={this.state.eco}/>
              }
            }}
          />

      <Route
        exact
        path='/:category/:type'
        render={({ match }) => {
          if (
            match.params.category === "vegan" &&
            match.params.type === "blush"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='blush'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "eyeshadow"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='eyeshadow'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "foundation"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='foundation'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "mascara"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='mascara'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "bronzer"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='bronzer'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "eyeliner"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='eyeliner'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "lipstick"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='lipstick'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "lip_liner"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='lip_liner'
                    />;
          } else if (
            match.params.category === "vegan" &&
            match.params.type === "nail_polish"
          ) {
            return <Items
                      data={this.state.vegan}
                      type='nail_polish'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "blush"
          ) {
            return <Items
                      data={this.state.eco}
                      type='blush'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "eyeshadow"
          ) {
            return <Items
                      data={this.state.eco}
                      type='eyeshadow'
                  />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "foundation"
          ) {
            return <Items
                      data={this.state.eco}
                      type='foundation'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "mascara"
          ) {
            return <Items
                      data={this.state.eco}
                      type='mascara'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "bronzer"
          ) {
            return <Items
                      data={this.state.eco}
                      type='bronzer'
                  />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "eyeliner"
          ) {
            return <Items
                      data={this.state.eco}
                      type='eyeliner'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "lipstick"
          ) {
            return <Items
                      data={this.state.eco}
                      type='lipstick'
                    />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "lip_liner"
          ) {
            return <Items
                      data={this.state.eco}
                      type='lip_liner'
                  />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "nail_polish"
          ) {
            return <Items
                      data={this.state.eco}
                      type='nail_polish'
                   />;
          } else if (
            match.params.category === "eco" &&
            match.params.type === "eyebrow"
          ) {
            return <Items
                      data={this.state.eco}
                      type='eyebrow'
                   />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "blush"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='blush'
                   />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "eyeshadow"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='eyeshadow'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "foundation"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='foundation'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "mascara"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='mascara'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "bronzer"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='bronzer'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "eyeliner"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='eyeliner'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "lipstick"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='lipstick'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "lip_liner"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='lip_liner'
                    />;
          } else if (
            match.params.category === "allergenFriendly" &&
            match.params.type === "nail_polish"
          ) {
            return <Items
                      data={this.state.allergenFriendly}
                      type='nail_polish'
                    />;
          }
        }}
        />

      <Route
        exact
        path='/error'
        render={() => <Error />}
      />
      <Footer />
    </main>
  )}
}

export default App;
