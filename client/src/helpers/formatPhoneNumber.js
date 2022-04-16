// solução baseada em: https://joaorodrs.medium.com/formatando-n%C3%BAmero-de-celular-cpf-cnpj-e-cep-com-regex-no-react-a2ee498fd9e9
export const formatPhoneNumber = (number) => {
  const phoneFormatted = number.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  return phoneFormatted;
};