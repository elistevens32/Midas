export class Ticker {

    id: number;
    CompanyId: number;
    Date: Date;
    ticker: string;
    TiingoBool: boolean;
    IexBool: boolean;
    YahooBool: boolean;

    // TIINGO
    exchange: string;
    assetType: string;
    priceCurrency: string;
    startDate: string;
    endDate: string;

    // IEX
    isEnabled: boolean;

    // YAHOO
    Isin: DoubleRange;
    type: string;
    industry: string;

}
