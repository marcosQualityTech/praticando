/// <reference types="cypress" />

// Bem-vindo ao Cypress!
//
// Este arquivo de especificação contém uma variedade de testes de exemplo
// para um aplicativo de lista de tarefas que são projetados para demonstrar
// o poder de escrever testes no Cypress.
//
// Para saber mais sobre como o Cypress funciona e
// o que o torna uma ferramenta de teste tão incrível,
// por favor, leia nosso guia de introdução:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {

// O Cypress começa com uma tela em branco para cada teste
// então devemos dizer a ele para visitar nosso site com o comando `cy.visit()`.
// Como queremos visitar a mesma URL no início de todos os nossos testes,
// incluímos isso na nossa função beforeEach para que seja executado antes de cada teste
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
// Usamos o comando `cy.get()` para obter todos os elementos que correspondem ao seletor.
// Em seguida, usamos `should` para afirmar que há dois itens correspondentes,
// que são os dois itens padrão.
    cy.get('.todo-list li').should('have.length', 2)
    
// Podemos ir ainda mais longe e verificar se as tarefas padrão contêm
// o texto correto. Usamos as funções `first` e `last`
// para obter apenas os primeiros e últimos elementos correspondentes individualmente,
// e então realizamos uma asserção com `should`.
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('can add new todo items', () => {
   // Vamos armazenar o texto do nosso item em uma variável para que possamos reutilizá-lo
    const newItem = 'Feed the cat'

// Vamos obter o elemento de entrada e usar o comando `type` para
// inserir nosso novo item na lista. Depois de digitar o conteúdo do nosso item,
// precisamos digitar a tecla enter também para enviar a entrada.
// Este campo de entrada tem um atributo data-test, então usaremos isso para selecionar o
// elemento de acordo com as melhores práticas:
// https://on.cypress.io/selecting-elements

    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

// Agora que digitamos nosso novo item, vamos verificar se ele realmente foi adicionado à lista.
// Como é o item mais novo, ele deve existir como o último elemento na lista.
// Além disso, com os dois itens padrão, devemos ter um total de 3 elementos na lista.
// Como as asserções retornam o elemento que foi verificado,
// podemos encadear ambas as asserções em uma única instrução.
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can check off an item as completed', () => {
// Além de usar o comando `get` para obter um elemento pelo seletor,
// também podemos usar o comando `contains` para obter um elemento pelo seu conteúdo.
// No entanto, isso retornará o <label>, que é o elemento de nível mais baixo que contém o texto.
// Para verificar o item, encontraremos o elemento <input> para este <label>
// subindo no DOM até o elemento pai. A partir daí, podemos `find`
// o elemento filho checkbox <input> e usar o comando `check` para marcá-lo.

    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()

// Agora que marcamos o botão, podemos prosseguir e garantir
// que o elemento da lista agora está marcado como concluído.
// Novamente, usaremos `contains` para encontrar o elemento <label> e, em seguida, usaremos o comando `parents`
// para percorrer vários níveis no DOM até encontrarmos o elemento <li> correspondente.
// Uma vez que obtemos esse elemento, podemos afirmar que ele possui a classe completed.

    cy.contains('Pay electric bill')
      .parents('li')
      .should('have.class', 'completed')
  })

  context('with a checked task', () => {
    beforeEach(() => {
// Vamos usar o comando que utilizamos acima para marcar um elemento
// Como queremos realizar vários testes que começam marcando
// um elemento, colocamos isso no hook beforeEach
// para que seja executado no início de cada teste.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })

    it('can filter for uncompleted tasks', () => {
// Vamos clicar no botão "active" para
// exibir apenas os itens incompletos
      cy.contains('Active').click()

// Após filtrar, podemos afirmar que há apenas um
// item incompleto na lista.
      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Walk the dog')

// Para garantir, vamos também afirmar que a tarefa que marcamos como concluída
// não existe mais na página.
      cy.contains('Pay electric bill').should('not.exist')
    })

    it('can filter for completed tasks', () => {
// Podemos realizar etapas semelhantes ao teste acima para garantir
// que apenas as tarefas concluídas sejam exibidas
      cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })

    it('can delete all completed tasks', () => {
// Primeiro, vamos clicar no botão "Clear completed"
// `contains` está na verdade servindo a dois propósitos aqui.
// Primeiro, está garantindo que o botão existe no DOM.
// Este botão só aparece quando pelo menos uma tarefa está marcada
// então este comando está implicitamente verificando que ele existe.
// Segundo, ele seleciona o botão para que possamos clicar nele.
      cy.contains('Clear completed').click()

// Então podemos garantir que há apenas um elemento
// na lista e que nosso elemento não existe mais
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')

  // Finalmente, certifique-se de que o botão de limpar não existe mais.
      cy.contains('Clear completed').should('not.exist')
    })
  })
})
