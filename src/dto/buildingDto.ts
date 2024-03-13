export interface BuildingDto{
    buildingID: number,
    customerID: number,
    resellerID: number,
    name: string,
    type: string,
    levels: number,
    occupants: number,
    constructed: number,
    area: number,
    streetNumber: number,
    streetName: string,
    city: string,
    state: string,
    postcode: string,
    country: string,
    timezone: string,
    weekStart: number,
    co2: number,
    conTariff: number,
    genTariff: number

}