# TBS Auth Token Generator - Test

This is a sample based on Node Js, Jsonwebtoken and axios to show how to authenticate with TaxBandits API. This sample includes a function `generateAuthToken`

## Configuration

You need to signup with TaxBandits Sandbox Developer Console at https://sandbox.taxbandits.com to get the keys to pass them in the function. See below for more directions:

> Using this function we can get the auth token for taxbandits api

### To get the sandbox keys:


- Go to Sandbox Developer console: https://sandbox.taxbandits.com.
- Signup or signin to Sandbox
- Navigate to Settings and then to API Credentials. Copy Client Id, Client Secret and User Token.

### The sandbox urls: (Please make sure to use the right versions)

- Auth URL: https://testoauth.expressauth.net/v2/tbsauth
- API URL: https://testapi.taxbandits.com/v1.6.1
- Sandbox Application URL: https://testapp.taxbandits.com


### The function `generateAuthToken` consist of 1 parameter which is an object
```
{
    authUrl:"Your auth url",
    clientId:"Your client id",
    clientSecret:"your client secret",
    userToken:"Your User Token"
}
```

On successful execution we will be getting an object with status, message and accessToken

```
{
  accessToken: 'Example Access Token',
  status: 'success',
  message: 'Successfully generated access token'
}
```

> Usage

Let `details` be the object derived on successful execution, We can utilize it by sending it in the header of api call

```
headers: 
{
	Authorization: `Bearer ${details.accessToken}`	
},
```
> Example

```
const generateAuthToken = require("tbs_auth_token_generator_saferio_demo")

const getAccessToken = async ()=>{

	// Please provide the details provided by Taxbandits
    const cred = {
        authUrl:"Your auth url",
    	clientId:"Your client id",
    	clientSecret:"your client secret",
    	userToken:"Your User Token"
    }
    const accessToken = await generateAuthToken(cred)
    console.log(accessToken)
}

getAccessToken()
```

