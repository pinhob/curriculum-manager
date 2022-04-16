import { render, screen } from '@testing-library/react';
import { MockedCurriculums } from '../../helpers/mocks/MockedCurriculums';
import { BrowserRouter as Router } from 'react-router-dom';
import Curriculums from './Curriculums';

describe('Curriculums', () => {
  it('should render title', () => {
    render(<Router><Curriculums /></Router>);

    const title = screen.getByText(/currículos/i);

    expect(title).toBeInTheDocument();
  });

  it('should render first curriculum', () => {
    render(<Router><Curriculums /></Router>);

    const name = screen.getByText(/bruno/i);
    const role = screen.getAllByText(/desenvolvedor/i)[0];
    const firstStack = screen.getAllByText(/javascript/i)[0];

    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(firstStack).toBeInTheDocument();
  });

  it(`should render ${MockedCurriculums.length} curriculums`, () => {
    render(<Router><Curriculums /></Router>);

    const curriculums = screen.getAllByRole('article');

    expect(curriculums.length).toBe(MockedCurriculums.length);
  });

  it('should have "Ver currículo" button', () => {
    render(<Router><Curriculums /></Router>);

    const button = screen.queryAllByRole('link', { name: /ver currículo/i })[0];

    expect(button).toBeInTheDocument();
  })

  it('should have "Adicionar currículo" button', () => {
    render(<Router><Curriculums /></Router>);

    const button = screen.getByText(/Adicionar Currículo/i);

    expect(button).toBeInTheDocument();
  })
});
