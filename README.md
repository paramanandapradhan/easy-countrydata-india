# easy-countrydata-india
Library to get indian states, disctricts, city and pincode information. (600KB)

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
