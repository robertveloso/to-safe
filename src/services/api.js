import axios from "axios";

export const mongeral = axios.create({
  baseURL: `https://gateway.gr1d.io/sandbox/mongeralaegon/v1/modeloproposta?completo=true&canalVenda=4`,
  // ?cnpj= d6395df3-35a7-49e9-921f-d8b14a38c940
});
export const consultaCPF = axios.create({
  baseURL: `https://gateway.gr1d.io/sandbox/serpro/consulta-cpf/v1/cpf/`,
  // cpf robert =12775086667
  // 7648115a - c47a - 4c5b- a281 - 1d61b942e738
});
export const consultaCNPJ = axios.create({
  baseURL: `https://gateway.gr1d.io/sandbox/serpro/consulta-cnpj/v1/cnpj/`,
  // cnpj google = 06990590000123
  // d75baf1f-78b6-4081-8ed3-b92d667f3a99
});

// cnpj=${cnpj}&
