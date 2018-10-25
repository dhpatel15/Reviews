import styled from 'styled-components';

const OverviewTitle = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const OverviewHeading = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

const OverviewText = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  display: block;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  padding-top: 0.5rem;
`;

const StarDiv = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  flex-wrap: nowrap;
`;

const StarIcons = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  display: block;
  padding: 0;
  margin: 0;
  width: calc(16px * 5 + 0.25rem * 5);
  flex-shrink: 0;
`;

const StarText = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  color: #2d333f;
  padding: 0;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 0.5rem 0 0;
  font-size: 0.875rem;
  line-height: 1.43;
`;

const RatingBar = styled.span`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  background: #da3743;
  height: 100%;
  display: block;
`;

const RatingBarBorder = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  margin: 0;
  display: block;
  flex: auto;
  height: 1rem;
  border: 1px solid #d8d9db;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -1px;
  margin-bottom: -2px;
`;

export {OverviewTitle, OverviewHeading, OverviewText, StarDiv, StarIcons, StarText, RatingBar, RatingBarBorder};