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

    const name = screen.getByText(/bruno/i);
    const role = screen.getByText(/desenvolvedor/i);
    const firstStack = screen.getByText(/javascript/i);

    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(firstStack).toBeInTheDocument();
  })
});
