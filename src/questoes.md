## Questões

---

O sistema de ERP da UNIDEP necessita consultar a nossa API desenvolvida em aula para realizar o cadastro dos ingressos nos cursos da instituição.

---

Em reunião realizada no dia 13/07/2022 o PO solicitou a equipe de desenvolvimento ágil a inclusão de algumas novas funcionalidades na API e validações.

---

1. Apresentar mensagem de erro quando o CEP informado diferir de 8 dígitos.

   - Mensagem de erro: "O CEP informado é inválido."

2. Incluir uma nova chamada na API `api/cpf`;
   - Se um CPF for inválido retornar `false`.
   - Se um CPF for válido retornar `true`.
