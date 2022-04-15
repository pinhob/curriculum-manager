import { render, screen } from '@testing-library/react';
import Curriculums from './Curriculums';

describe('Curriculums', () => {
  it('should render title', () => {
    render(<Curriculums />);

    const title = screen.getByText(/currículos/i);

    expect(title).toBeInTheDocument();
  });

  it('should render first curriculum', () => {
    render(<Curriculums />);

    const curriculum = screen.getByText(/bruno/i);

    expect(curriculum).toBeInTheDocument();
  })
});
