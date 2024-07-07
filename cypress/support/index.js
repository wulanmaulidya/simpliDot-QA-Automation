Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false biar test-nya gak nge-fail
  if (err.message.includes('ga is not defined')) {
    return false;
  }
});
