const jwt =require('jsonwebtoken')
const axios =require('axios')

const generateAuthToken = async (cred)=>{
    const {authUrl,clientId,clientSecret,userToken} = cred
    const payload = {
		iss: clientId,
		sub: clientId,
		aud: userToken,
		iat: Math.floor(new Date().getTime() / 1000)
	};

	const jwsToken = jwt.sign(payload, clientSecret, {
		expiresIn: 216000,
	});

    const authOptions = {
		headers: {
			Authentication: jwsToken,
		},
	};
	
	var accessToken = null

	try {
		const res = await axios.get(authUrl, authOptions);
		accessToken = res.data.AccessToken;
        return {
            accessToken,
            status : "success",
            message : "Successfully generated access token"
        }
	} catch (err) {
        // console.log(`Access Token error`)
		// console.log(err);
        accessToken = null
        return {
            accessToken,
            status : "error",
            message : "Please ensure the provided details are valid"
        }
	}
}

module.exports = generateAuthToken