import React from 'react';
import axios from 'axios';
import {OverviewTitle, OverviewHeading, OverviewText, StarDiv, StarIcons, StarText, RatingBar, RatingBarBorder} from '../../styledComponents/styledComponents.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      restaurantId: '',
      restaurantLocation: '',
      lovedFor: '',
      overallRating: null,
      overallRatings: [90, 80, 70, 60, 50],
      overallNums: ['5', '4', '3', '2', '1'],
      otherRatings: [3, 3, 3, 3, 3],
      ratingNames: ['Food', 'Service', 'Ambience', 'Value'],
      ambienceRating: undefined,
      valueRating: undefined,
      noiseLevel: '',
      recommend: undefined
    };
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  getRestaurant(id) {
    return axios.get('/restaurants', {params: {id: id}})
      .then(({data}) => {
        this.setState({
          restaurantLocation: data[0].location,
          lovedFor: data[0].lovedFor
        });
      });
  }

  componentDidMount() {
    let restaurantId = Number(window.location.pathname.slice(12)).toString();
    this.getRestaurant(restaurantId);
  }

  render() {
    return (
      <React.Fragment>
        <OverviewTitle>What {this.state.reviews.length} People Are Saying</OverviewTitle>
        <div>
          <div>
            <OverviewHeading>Overall ratings and reviews</OverviewHeading>
            <OverviewText>Reviews can only be made by diners who have eaten at this restaurant</OverviewText>
            <StarDiv>
              <StarIcons>
                <i>Star</i>
                <i>Star</i>
                <i>Star</i>
                <i>Star</i>
                <i>Star</i>
              </StarIcons>
              <StarText>
                <span>{this.state.overallRating}</span>
                <span>based on recent ratings</span>
              </StarText>
            </StarDiv>
            <div>
              <div>
                <div>{this.state.otherRatings[0]}</div>
                <div>{this.state.ratingNames[0]}</div>
              </div>
              <div>
                <div>{this.state.otherRatings[1]}</div>
                <div>{this.state.ratingNames[1]}</div>
              </div>
              <div>
                <div>{this.state.otherRatings[2]}</div>
                <div>{this.state.ratingNames[2]}</div>
              </div>
              <div>
                <div>{this.state.otherRatings[3]}</div>
                <div>{this.state.ratingNames[3]}</div>
              </div>
              <div>
                <div>
                  <div>
                    <i></i>
                  </div>
                  <div>Noise&nbsp;·&nbsp;<span>{this.state.noiseLevel}</span></div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <i></i>
                  </div>
                  <div>85% of people&nbsp;<span>would recommend it to a friend</span></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>{this.state.overallNums[0]}</span>
                <RatingBarBorder>
                  <RatingBar style={{width: this.state.overallRatings[0] + '%'}}></RatingBar>
                </RatingBarBorder>
              </div>
              <div>
                <span>{this.state.overallNums[1]}</span>
                <RatingBarBorder>
                  <RatingBar style={{width: this.state.overallRatings[1] + '%'}}></RatingBar>
                </RatingBarBorder>
              </div>
              <div>
                <span>{this.state.overallNums[2]}</span>
                <RatingBarBorder>
                  <RatingBar style={{width: this.state.overallRatings[2] + '%'}}></RatingBar>
                </RatingBarBorder>
              </div>
              <div>
                <span>{this.state.overallNums[3]}</span>
                <RatingBarBorder>
                  <RatingBar style={{width: this.state.overallRatings[3] + '%'}}></RatingBar>
                </RatingBarBorder>
              </div>
              <div>
                <span>{this.state.overallNums[4]}</span>
                <RatingBarBorder>
                  <RatingBar style={{width: this.state.overallRatings[4] + '%'}}></RatingBar>
                </RatingBarBorder>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;