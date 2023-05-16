# easy-countrydata-india

`easy-countrydata-india` is a comprehensive library for managing Indian postal PIN code data. It is designed to be lightweight and efficient, making it an ideal choice for both browser and Node.js environments.

The main objective of `easy-countrydata-india` is to provide an easy-to-use interface for accessing and manipulating data related to Indian geography. This includes:

- **Indian States:** Retrieve information and statistics about different states in India.
- **Districts:** Access detailed data about the various districts within each state.
- **Cities:** Get insights into cities across the country, including demographic data and geographic details.
- **Pincodes:** A complete directory of Indian postal PIN codes, allowing you to easily link geographic locations with their corresponding postal codes.

Whether you're developing a location-based service, conducting geographic research, or simply need a reliable source of Indian geographic data, `easy-countrydata-india` provides a robust and efficient solution.

## Repository

To contribute or learn more, visit our GitHub repository: 

[github.com/paramanandapradhan/easy-countrydata-india](https://github.com/paramanandapradhan/easy-countrydata-india)

# Install 

```
npm i @cloudparker/easy-countrydata-india --save-dev
```

# CDN install

```
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-countrydata-india@main/dist/index.js" />
```

# Usage

### Nodejs
```js
import EasyCountryDataIndia from "@cloudparker/easy-countrydata-india@1.0.0";

EasyCountryData.getAll();
// [ {"pincode":504293,"state":"Telangana","district":"Adilabad","cities":["Asifabad"]}, ...]

EasyCountryDataIndia.getStates();
//  ["Telangana","Andhra Pradesh", ...]

EasyCountryDataIndia.getDistricts('Telangana');
//  ["Adilabad", "Karim Nagar", ...]

EasyCountryDataIndia.getPincodeData(560067)
// {"pincode":560067,"state":"Karnataka","district":"Bangalore","cities":["Hosakote","Kadugodi"]}

EasyCountryDataIndia.getSateData('Odisha')
// {"pincode":768005,"state":"Odisha","district":"Sambalpur","cities":["Maneswar","Dhanupali"]}, ...]

EasyCountryDataIndia.getDistrictData('Odisha','Sambalpur')
// [{"pincode":768006,"state":"Odisha","district":"Sambalpur","cities":["Dhankauda","Remed"]},

EasyCountryDataIndia.getCityData('Rairakhol')
// [{"pincode":768106,"state":"Odisha","district":"Sambalpur","cities":["Rairakhol"]}]

EasyCountryDataIndia.getCityData('Bangalore')
// [{"pincode":560108,"state":"Karnataka","district":"Bangalore","cities":["Bangalore"]},{"pincode":560004,"state":"Karnataka","district":"Bangalore","cities":["Bangalore"]}, ....]

```

### Browser
```js
<script src="https://cdn.jsdelivr.net/gh/paramanandapradhan/easy-countrydata-india@main/dist/index.js" />


EasyCountryData.getAll();
// [ {"pincode":504293,"state":"Telangana","district":"Adilabad","cities":["Asifabad"]}, ...]

EasyCountryDataIndia.getStates();
//  ["Telangana","Andhra Pradesh", ...]

EasyCountryDataIndia.getDistricts('Telangana');
//  ["Adilabad", "Karim Nagar", ...]

EasyCountryDataIndia.getPincodeData(560067)
// {"pincode":560067,"state":"Karnataka","district":"Bangalore","cities":["Hosakote","Kadugodi"]}

EasyCountryDataIndia.getSateData('Odisha')
// {"pincode":768005,"state":"Odisha","district":"Sambalpur","cities":["Maneswar","Dhanupali"]}, ...]

EasyCountryDataIndia.getDistrictData('Odisha','Sambalpur')
// [{"pincode":768006,"state":"Odisha","district":"Sambalpur","cities":["Dhankauda","Remed"]},

EasyCountryDataIndia.getCityData('Rairakhol')
// [{"pincode":768106,"state":"Odisha","district":"Sambalpur","cities":["Rairakhol"]}]

EasyCountryDataIndia.getCityData('Bangalore')
// [{"pincode":560108,"state":"Karnataka","district":"Bangalore","cities":["Bangalore"]},{"pincode":560004,"state":"Karnataka","district":"Bangalore","cities":["Bangalore"]}, ....]

```
