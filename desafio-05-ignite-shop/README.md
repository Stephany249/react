# Desafio 04 - Adicionando features ao Ignite Shop

# Sobre o desafio

Nesse desafio, você vai aproveitar a aplicação que já desenvolvemos na trilha para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

Para completar esse desafio você vai  precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

# Layout da aplicação

[Layout](https://www.figma.com/file/FxlDRKOmznBbTH8DsTgnZU/Ignite-Shop-2.0/duplicate)

# Desenvolvendo o projeto

Para desenvolver esse projeto, você utilizará a aplicação base desenvolvida durante a aula.

Para armazenar os itens no carrinho, você pode fazer isso da maneira que preferir, por exemplo utilizando uma Context API para salvar os itens, ou utilizar a biblioteca [use-shopping-cart](https://www.npmjs.com/package/use-shopping-cart) que já possui diversas facilitações para essa lógica.

Você pode encontrar mais sobre o use-shopping cart [**clicando aqui.**](https://useshoppingcart.com/docs/welcome/getting-started-serverless)