import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 6rem;
  position: relative;
  flex: none;
`;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.getUser = this.getUser.bind(this);
  }

  getUser() {
    axios.get('/users', {params: {id: this.props.review.userId}})
      .then(({data}) => {
        this.setState({
          user: data[0]
        });
      });
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props;
    if (newProps.review.id !== prevProps.review.id) {
      getUser();
    }
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <UserBody>

      </UserBody>
    );
  }
}

export default User;