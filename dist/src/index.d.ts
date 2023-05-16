export type PinData = {
    pincode: number;
    state: string;
    district: string;
    cities: string[];
};
export declare function getAll(): PinData[];
export declare function getStates(): string[];
export declare function getDistricts(state?: string): string[];
export declare function getPincodeData(pincode: number): PinData;
export declare function getSateData(state: string): PinData[];
export declare function getDistrictData(state: string, district: string): PinData[];
export declare function getCityData(city: string): PinData[];
