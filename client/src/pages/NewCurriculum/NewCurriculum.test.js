import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewCurriculum from './NewCurriculum';

describe('NewCurriculum', () => {
  it('should render title', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/adicionar currículo/i);

    expect(title).toBeInTheDocument();
  });

  it('should have "Informações pessoais" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/informações pessoais/i);
    const name = screen.getByLabelText(/nome/i);
    const email = screen.getByLabelText(/email/i);
    const phone = screen.getByLabelText(/telefone/i);
    const city = screen.getByLabelText(/cidade/i);
    const state = screen.getByLabelText(/estado/i);
    const role = screen.getAllByLabelText(/função/i)[0];

    expect(title).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  it('should have "Redes sociais" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/redes sociais/i);
    const linkedin = screen.getByLabelText(/linkedin/i);
    const github = screen.getByLabelText(/github/i);

    expect(title).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
  });

  it('should have "Perfil profissional" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const presentation = screen.getByLabelText(/apresentação/i);

    expect(presentation).toBeInTheDocument();
  });

  it('should have "Formação" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/formação/i);
    const course = screen.getByLabelText(/curso/i);
    const school = screen.getAllByLabelText(/instituição/i)[0];
    const type = screen.getByLabelText(/tipo/i);
    const endDate = screen.getAllByLabelText(/data de término/i)[0];

    expect(title).toBeInTheDocument();
    expect(school).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(course).toBeInTheDocument();
    expect(endDate).toBeInTheDocument();
  });

  it('should have "Experiências" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/experiências/i);
    const role = screen.getAllByLabelText(/cargo/i)[0];
    const company = screen.getByLabelText(/empresa/i);
    const startDate = screen.getAllByLabelText(/data de início/i)[0];
    const endDate = screen.getAllByLabelText(/data de término/i)[1];

    expect(title).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(company).toBeInTheDocument();
    expect(startDate).toBeInTheDocument();
    expect(endDate).toBeInTheDocument();
  }
  );

  it('should have "Tecnologias" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByRole('heading', { name: /tecnologias/i });
    const technology = screen.getAllByLabelText(/tecnologia/i);

    expect(title).toBeInTheDocument();
    expect(technology[0]).toBeInTheDocument();
    expect(technology).toHaveLength(6);
  });

  it('should have "Idiomas" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/idiomas/i);
    const language = screen.getByLabelText(/idioma/i);

    expect(title).toBeInTheDocument();
    expect(language).toBeInTheDocument();
  });

  it('should have "Atividades voluntárias" fields', () => {
    render(<Router><NewCurriculum /></Router>);

    const title = screen.getByText(/atividades voluntárias/i);
    const role = screen.getByLabelText(/atividade/i);
    const institution = screen.getAllByLabelText(/instituição/i)[1];
    const startDate = screen.getAllByLabelText(/data de início/i)[1];
    const endDate = screen.getAllByLabelText(/data de término/i)[2];

    expect(title).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(institution).toBeInTheDocument();
    expect(startDate).toBeInTheDocument();
    expect(endDate).toBeInTheDocument();
  });
});
