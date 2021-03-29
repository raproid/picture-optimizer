var express = require('express'); // server framework (proxy, watever)
var axios = require('axios'); // library for simple network requests
var app = express();
app.get('/pic-optimizer', async (req, res) => {
  const rawResponse = await axios.get('https://www.yaplakal.com/');
  const responseText = rawResponse.data;
  const responseModified = responseText.replace(/src="(.*?\.jpg)"/ig, 'src="<YOUR-UPLOADCARE-OPTIMIZER-URL>$1"');
  res.send(responseModified);
  console.log('Page processed. Picture optimization in progress.');
})
app.listen(8000, function () {
 console.log('App started on port 8000')
});