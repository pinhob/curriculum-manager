import { render, screen } from '@testing-library/react';
import { MockedCurriculums } from '../../helpers/mocks/MockedCurriculums';
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
    const role = screen.getAllByText(/desenvolvedor/i)[0];
    const firstStack = screen.getAllByText(/javascript/i)[0];

    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(firstStack).toBeInTheDocument();
  });

  it(`should render ${MockedCurriculums.length} curriculums`, () => {
    render(<Curriculums />);

    const curriculums = screen.getAllByRole('article');

    expect(curriculums.length).toBe(MockedCurriculums.length);
  });
});
