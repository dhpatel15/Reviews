import React from 'react';
import User from './User.jsx';
import styled from 'styled-components';

const ReviewBody = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #d8d9db;
  color: #2d333f;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReviewBody>
        <User review={this.props.review}></User>
      </ReviewBody>
    );
  }
}

export default Review;