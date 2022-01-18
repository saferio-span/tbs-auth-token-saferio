# TBS Auth Token Generator - Test

> Using this function we can get the auth token for taxbandits api

### The function consist of 1 parameter which is an object
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

