var http = require("http");
//var figlet = require("figlet");
//var url = require('url');

http.createServer(function(request, response) {
  //var urlQ = url.parse(request.url, true);

  //check to see if the text will extend beyond the display
  //check text length * max_width of font >= max width
  // if so, insert \n after each character in text

  //var columnText = urlQ.query.text;
  //columnText = columnText.split("").join("\n");
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
    
  //response.write("```\n"+figlet.textSync(columnText, 'Standard')+"\n```"); 
  response.write("hello");
  response.end();
}).listen(31489);
