import express from 'express';
import bodyParser from 'body-parser';
import {deleteLocalFiles, filterImageFromURL} from './util/util.js';


// Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Start GET /filteredimage endpoint
app.get( "/filteredimage", async (req, res) => {
    const imageUrl = req.query.image_url;
    //1. validate the image_url query
    if (!imageUrl) {
        return res.status(400).send(`Image URL is required !`)
    }

    //2. call filterImageFromURL(image_url) to filter the image
    let filePath;
    try {
        filePath = await filterImageFromURL(imageUrl);

        // 3. send the resulting file in the response
        return res.status(200).sendFile(filePath, err => {
            //  4. deletes any files on the server on finish of the response
            deleteLocalFiles([filePath]);
        });

    } catch (error) {
        return res.status(422).send(`Image is not valid: ` + imageUrl)
    }
} );
    /**************************************************************************** */

  //! END

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
