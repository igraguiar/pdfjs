const fs = require('fs');
const PDFJS = require('pdfjs-dist');

// Caminho para o arquivo PDF
const filePath = 'sample.pdf';

// Carrega o arquivo PDF
PDFJS.getDocument(filePath)
  .promise
  .then(function (pdf) {
    // Obtém a primeira página
    return pdf.getPage(1);
  })
  .then(function (page) {
    // Extrai o conteúdo de texto da página
    return page.getTextContent();
  })
  .then(function (textContent) {
    // Itera sobre os itens de texto e extrai o texto com base nas coordenadas desejadas
    for (var i = 0; i < textContent.items.length; i++) {
      var item = textContent.items[i];
      var itemRect = item.transform;
      console.log(item);
      // Verifique as coordenadas do itemRect e extraia o texto se estiver dentro de sua área desejada
      if (itemRect[4] >= 100 && itemRect[4] <= 200 && itemRect[5] >= 100 && itemRect[5] <= 200) {
        console.log(item.str);
      }
    }
  })
  .catch(function (error) {
    console.error(error);
  });
