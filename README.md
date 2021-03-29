# Picture optimizer

A simple program that catches the response from a web site and modifies the response body according to the implemented logic.

The algorithm:

1. Create a server instance.
2. Create a client instance. 
3. Create an app based on the server instance.
4. Define the app logic: 
	1. Define a URI to visit for the logic to run.
	2. Request a URL via the client instance. 
	3. Get the reponse and separate the reponse body.
	4. Modify the body: find each picture URL and add the hardcoded prefix before it.
	5. Send the modified response to the web browser. 

5. Run the app.

## Prerequisites

### Uploadcare account and settings

1. Visit https://uploadcare.com/ and create a new trial account.
2. When registered, go to **Dashboard** and create a new project. 
3. Go to the project settings clicking on the newly created project. 
4. Click **Delivery** on the left navigation panel. 
5. Scroll down and click **Connect** under the **Media proxy** section.
6. Add a domain of your choice to the list of allowed domains. By default, the program visits `yaplakal.ru`, so add `www.yapfiles.ru` and `s00.yaplakal.com` if you want to test the program.
7. Copy your optimization URL from the **Step 2**  and save it somewhere on your device. The URL starts with `https://` and ends with `ucr.io`. For example `https://asdlkfjah43a259tlajgdad.ucr.io/`.
8. Click **Done**. 

### Node.js and modules

1. Install Node.js any way acceptable for you: package, apt, homebrew, yarn, etc. Use Google to find your option.
2. Install dependencies: 

   ```npm install express axios```


## Clone and prepare

### Clone

Open terminal and run:

```git clone git@github.com:raproid/picture-optimizer.git && cd picture-optimizer```


### Prepare

Open `picture-optimizer.js` and replace `<YOUR-UPLOADCARE-OPTIMIZER-URL>` with the URL from #7 from **Prerequisites**. 
For example, `https://asdlkfjah43a259tlajgdad.ucr.io/$1`.

## Run

Run the picture optimizer: 

```node picture-optimizer.js```


## Test

Run the app and open the following URL in a web browser: ```localhost:8000/picture-optimizer```


## Credits

Credits to [Vitaly Afonin](https://github.com/afoninv) who built the major part of this program and helped me undestand and finish it. 