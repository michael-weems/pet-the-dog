import {createServer} from 'http';
import * as fs from 'fs';

const server = createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
});

server.listen(process.env.PORT || 7000);
