﻿var NovaOrdemScreen = function(){
  
// LOCALIZADORES - SetText
  this.fillTotal = async() => {
    var campoTotal = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("groupBox1").WinFormsObject("Total");
    campoTotal.Keys("3000")
   }
  
  this.fillQuantidade = async() =>{
   var campoQuantidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Quantity").WinFormsObject("UpDownEdit", "");
   fillQuantidade.Keys("10");
  }
  
  this.fillPrecoUnidade = async() =>{
   var campoPrecoUnidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Price");
    campoPrecoUnidade.Keys("$200");
  }
  
  this.fillDesconto = async () =>{
    var fillDesconto = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Discount");
   fillDesconto.Keys("20%");
  }
  
  this.clickOK = async() =>{
    var botaoOK = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("ButtonOK");
    botaoOK.Click();
  }
  
// SETTEXT Date

  this.fillData = async() =>{
    var campoData = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Date");
    campoData.wdate = "2021-10-05";
  }
  
// OCR

  //TESTE DA BRANCH
    Delay(5000);
}
module.exports = new NovaOrdemScreen;
