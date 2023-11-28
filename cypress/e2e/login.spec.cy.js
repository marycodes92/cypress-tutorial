import { Login } from '../page-objects/Login';

describe('Login Module', () => {
  const login = new Login();

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com');
  })

  it('login as a standard user', () => {
    login.loginForm('standard_user', 'secret_sauce')
    cy.get('.shopping_cart_link').should('be.visible');
  })

  it('login as a locked out user', () => {
    login.loginForm('locked_out_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('be.visible').and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('login as a problem user', () => {
    login.loginForm('problem_user', 'secret_sauce');
  })

  // it('testing fixtures', ()=>{
  //   cy.fixture('example').then((data)=>{
  //     console.log('Data: ', data.name);
  //   })
  // })
})