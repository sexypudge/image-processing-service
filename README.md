# image-processing-service

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```

***

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:

`npm start` or `node server` or `npm run dev`

***
## Important Files and Project Structure

The source code for this demo resides in the ./src directory.

#### Test URL
http://localhost:8082/

http://image-processing-service-dev.us-east-1.elasticbeanstalk.com/

http://image-processing-service-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg

## Curl commands

### image processing endpoint 

#### in local
```
curl --location 'http://localhost:8082/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg'
```

#### in the running elastic beanstalk deployment: `image-processing-service-dev`
```
curl --location 'http://image-processing-service-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg'
```