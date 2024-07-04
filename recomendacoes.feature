Funcionalidade: Recomendações Diárias de Filmes

Cenário: Exibição de recomendações diárias de filmes em alta
    Dado que o usuário está na página principal do sistema
  Quando o sistema carrega a página
   Então o sistema deve exibir de 4 a 5 filmes em alta como recomendações do dia
       E cada recomendação deve incluir a capa do filme e o título

Cenário: Atualização diária das recomendações de filmes
    Dado que o sistema atualiza as recomendações diariamente
  Quando é um novo dia
   Então a lista de filmes recomendados deve ser atualizada
       E os filmes recomendados devem ser selecionados com base em sua popularidade, avaliações recentes e relevância para tendências atuais conforme o IMDB

Cenário: Navegação pelas recomendações do dia
    Dado que o usuário está na página principal do sistema
  Quando o sistema exibe as recomendações do dia
   Então o usuário deve ser capaz de navegar pelas recomendações do dia

Cenário: Falha na atualização diária das recomendações
    Dado que o sistema tenta atualizar as recomendações diárias
  Quando a atualização diária falha devido a problemas na API
   Então o sistema deve manter os títulos recomendados do dia anterior