import { render, screen } from '@testing-library/react';
import App from './App';

test('heading should always be there', () => {
  render(<App />);
  const heading = screen.getByText(/Name | Mantel Brand | Favourite Food | Last show watched/i);
  expect(heading).toBeInTheDocument();
});

test('page renders correctly', () => {
  render(<App />);
  const page = render.create(<App />).toJSON();
  expect(page).toMatchSnapshot();
});