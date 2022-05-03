import React, { Component} from "react";
import axios from "axios";
import { Container } from "reactstrap";

export default class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  Yukleme(){
    return(
      <div>Loading...</div>
    )
  }
  listeGetir() {
    return (
      <div>
        {this.state.users.map((kisiler) => (
          <ul key={kisiler.id}>
            <li>
              {kisiler.username}:{kisiler.name}
            </li>
          </ul>
        ))}
      </div>
    );
  }
  render() {
  

    return (
      <div>
        <Container>
          {this.state.users.length>0?this.listeGetir(): this.Yukleme()}
        </Container>
      </div>
    );
  }
}
