# Kieu Salon API

## Install

### Clone
From your terminal:
```
git clone https://github.com/matthewstewart/kieu-api.git
```

### Install Modules
```
npm install
```

### Run
```
cd kieu-api && node server
```

## Configure
In local development, the environment variables are expected to be located in `/config/env.js` which is not included in the git commit as it contains secure information not to be shared with the public.  
In production the environment variables should be applied prior to deployment.  
Below is an example that you can fill out and save to `/config/env.js`:
```
// /config/env.js
process.env.DB_USERNAME = "myDbUsername";
process.env.DB_PASSWORD = 'myDbPassword';
process.env.DB_URI = 'ds123456.mlab.com:12345/mydbname';
process.env.JWT_SECRET = 'mySuperSecretPasswordPhrase';
```