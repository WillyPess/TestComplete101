
var HomeScreen = function(){
  
  
  this.clickNovaOrdem = async() => {
  let botaoNovaOrdem = Aliases.Orders.MainForm.MainMenu;
  botaoNovaOrdem.Click("Orders|New order...");
  }
  
}
module.exports = new HomeScreen;