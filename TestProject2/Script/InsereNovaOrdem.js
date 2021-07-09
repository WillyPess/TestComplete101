var novaOrdem = require("NovaOrdemScreen");
var homeScreen = require("HomeScreen");

function InsereNovaOrdem()
{
  
//  homeScreen.clickNovaOrdem();
  novaOrdem.fillQuantidade();
  novaOrdem.fillTotal();
  novaOrdem.fillPrecoUnidade();
  novaOrdem.fillDesconto();
  novaOrdem.fillData();
  
  }