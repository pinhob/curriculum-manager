import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewCurriculum from './NewCurriculum';

describe('NewCurriculum', () => {
  it('should render title', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/adicionar currículo/i);

    expect(title).toBeInTheDocument();
  });
});
