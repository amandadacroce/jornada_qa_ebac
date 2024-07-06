 Cenário: Usuário busca por filmes usando uma palavra-chave
     Dado que o usuário está na página de busca de filmes
   Quando o usuário digita a palavra-chave no campo de busca
        E o usuário clica em "BUSCAR"
    Então o sistema exibe uma lista de filmes que correspondem a palavra-chave
        E cada filme inclui o título, a capa e uma sinopse curta

Cenário: Nenhum filme encontrado para a palavra-chave de busca
    Dado que o usuário está na página de busca de filmes
  Quando o usuário digita a palavra-chave no campo de busca
       E o usuário clica em "BUSCAR"
   Então o sistema exibe a mensagem "Nenhum resultado encontrado"

Cenário: Busca em tempo real atualizando a lista de filmes
    Dado que o usuário está na página de busca de filmes
  Quando o usuário digita a palavra-chave no campo de busca
   Então o sistema atualiza a lista de filmes em tempo real conforme o usuário digita
       E cada filme exibido inclui o título, a capa e uma sinopse curta

Cenário: Usuário limpa a busca
    Dado que o usuário está na página de busca de filmes
       E o usuário digitou a palavra-chave no campo de busca
  Quando o usuário clica em "Limpar Busca"
   Então o campo de busca é limpo
       E a lista de filmes é limpa

Cenário: Resultados rolagem infinita
    Dado que o usuário está na página de busca de filmes
  Quando o usuário digita a palavra-chave no campo de busca
       E o usuário clica em "BUSCAR"
   Então o sistema exibe até 10 filmes inicialmente
       E fornece paginação ou rolagem infinita para os filmes adicionais

Cenário: Resultados de busca ordenados por popularidade e nota do IMDB
    Dado que o usuário está na página de busca de filmes
  Quando o usuário digita a palavra-chave no campo de busca
       E o usuário clica em "BUSCAR"
   Então o sistema exibe os filmes ordenados por popularidade e nota do IMDB
       E cada filme inclui o título, a capa e uma sinopse curta