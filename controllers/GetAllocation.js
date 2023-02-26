const router = require('express').Router()
const http = require('http')

router.post("/getallocation", (req, res) => {
    try{
        const postData = JSON.stringify({
            loginId: req.body.loginId,
            sfdcId: req.body.sfdcId,
          });
          
          const options = {
            hostname: 'jsonplaceholder.typicode.com',
            path: '/posts',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(postData),
            },
          };

          const makePost = () => {
            let data = '';
          
            const request = http.request(options, (response) => {
              response.setEncoding('utf8');
          
              response.on('data', (chunk) => {
                data += chunk;
              });
          
              response.on('end', () => {
                console.log(data);
              });
            });
          
            request.on('error', (error) => {
              console.error(error);
            });
          
            // Write data to the request body
            request.write(postData);
          
            request.end();
          };
          
          makePost();
       
    }
    catch(err){
        res.status(400).json(err)
    }
})