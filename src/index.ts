import { data, states, dists } from "./data";
let pincodesArray: PinData[] = [];
let pincodesMap: { [key: number]: PinData } = {};
let citiesMap: { [key: string]: PinData[] } = {};

let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/" +
    "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ" +
    "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒ";

export type PinData = {
    pincode: number,
    state: string,
    district: string,
    cities: string[],

}

export function getAll(): PinData[] {
    if (!pincodesArray || !pincodesArray.length) {
        pincodesArray = (data || []).map((item: string[], index) => {
            let result: PinData = {} as any;
            result.pincode = fromBase128(item[0]);
            result.state = states[fromBase128(item[1])];
            result.district = dists[fromBase128(item[2])];
            result.cities = item[3].split(',');

            pincodesMap[result.pincode] = result;

            result.cities.forEach((city: string) => {
                let array = citiesMap[city];
                if (!array) {
                    array = [result];
                    citiesMap[city] = array;
                } else {
                    array.push(result)
                }
            });

            return result;
        })
    }
    return pincodesArray;
}


export function getStates(): string[] {
    return states;
}

export function getDistricts(state?: string): string[] {
    state = toTitleCase(state || '');
    if (state) {
        getAll();
        let items = pincodesArray.filter((item) => item.state == state);
        let set = new Set(items.map(o => o.district));
        return Array.from(set);
    }
    return dists;
}

export function getPincodeData(pincode: number ): PinData {
    getAll();
    return pincodesMap[pincode];
}

export function getSateData(state: string): PinData[] {
    getAll();
    state = toTitleCase(state || '');
    return pincodesArray.filter((item) => item.state == state);
}

export function getDistrictData(state: string, district: string): PinData[] {
    getAll();
    state = toTitleCase(state || '');
    district = toTitleCase(district || '');
    return pincodesArray.filter((item) => item.state == state && item.district == district);
}

export function getCityData(city: string,): PinData[] {
    getAll();
    city = toTitleCase(city || '');
    let results = citiesMap[city];
    if (results && results.length > 1) {
        let set = new Set(results.map((item: PinData) => item.pincode));
        results = Array.from(set).map((pin: number) => pincodesMap[pin])
    }
    return results;
}

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function toBase128(num: number) {
    let str = '';
    do {
        str = chars[num % 128] + str;
        num = Math.floor(num / 128);
    } while (num > 0);
    return str;
}

function fromBase128(str: string) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        num = num * 128 + chars.indexOf(str[i]);
    }
    return num;
}

