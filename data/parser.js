let path = require('path');
let fs = require('fs');

let sourceData = require('./csvjson.json')



let states = new Set();
let dists = new Set();



function main() {
    let results = []
    sourceData.forEach(o => {
        let state = null;
        let dist = null;
        let cities = new Set();

        /// Postal code
        let pin = ('' + o['pincode'] || '').trim();

        // pinCode = toBase128(parseInt(pin));

        //result.push(pincode);

        /// State index 
        state = toTitleCase(o['statename'] || '').trim();
        if (state && state != 'Na' && state != "Null") {
            states.add(state);
        }

        /// Disctrict
        dist = toTitleCase(o['Districtname'] || '').trim();
        if (dist && dist != 'Na' && dist != "Null") {
            dists.add(dist);
        }

        /// Taluk index 
        let taluk = toTitleCase((o['Taluk'] || '').replaceAll('S.O', '')).trim();
        if (taluk && taluk != 'Na' && taluk != "Null") {
            cities.add(taluk);
        }

        ///   City 
        let city = toTitleCase((o['Related Suboffice'] || '').replaceAll('S.O', '')).trim();
        if (city && city != 'Na' && city != "Null") {
            let city2 = null;
            let city1 = city;
            let match = city.match(/\(([^)]+)\)/);
            if (match) {
                city2 = city.match(/\(([^)]+)\)/)[1];
                if (city2) {
                    city1 = city1.substr(0, city1.indexOf('('));
                }
            }
            if (city1) cities.add(city1.trim());
            if (city2) cities.add(city2.trim());
        }


        if (pin) {
            let result = results.find((item) => item.pin == pin);
            if (!result) {
                result = {
                    pin,
                    state,
                    dist,
                    cities,

                };
                results.push(result);
            } else {
                if (!result.state || result.state == 'Na' || result.dist == 'Null') {
                    result.state = state;
                }
                if (!result.dist || result.dist == 'Na' || result.dist == 'Null') {
                    result.dist = dist;
                }
                cities.forEach(value => result.cities.add(value));
            }
            result.ct = Array.from(cities).join(',');
        }

        return null;

    });

    let statesArray = Array.from(states);
    let distsArray = Array.from(dists);
    let array = results.map((item) => {
        return [
            toBase128(item.pin),
            toBase128(statesArray.indexOf(item.state)),
            toBase128(distsArray.indexOf(item.dist)),
            item.ct
        ]
    })

    let data  = 
    `export const states = ${JSON.stringify(statesArray)};\n\n`
    +`export const dists = ${JSON.stringify(distsArray)};\n\n`
    +`export const data = ${JSON.stringify(array)};\n\n`

    fs.writeFileSync(path.resolve(__dirname, 'data.ts'),data);


    // console.log(JSON.stringify(array));
    // console.log(JSON.stringify(Array.from(dists)));
    console.log(data[0]);
    console.log('Dist Count ', Array.from(dists).length);
    console.log('States Count ', Array.from(states).length);
    console.log('Pin Count ', array.length);
    console.log("Size", JSON.stringify(array).length / 1000, 'KB');
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/" +
    "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ" +
    "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒ";

function toBase128(num) {
    let str = '';
    do {
        str = chars[num % 128] + str;
        num = Math.floor(num / 128);
    } while (num > 0);
    return str;
}

function fromBase128(str) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        num = num * 128 + chars.indexOf(str[i]);
    }
    return num;
}


main();