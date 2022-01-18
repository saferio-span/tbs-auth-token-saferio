# TBS Auth Token Generator - Test

> Using this function we can get the auth token for taxbandits api

### The function consist of 4 parameters
- Auth Url
- Client Id
- Client Secret
- User Token 

On successful execution we will be getting an access token

> Usage

Let `accessToken` be the constant derived, We can utilize it by sending it in the header of api call

```
headers: 
{
	Authorization: `Bearer ${accessToken}`	
},
```
