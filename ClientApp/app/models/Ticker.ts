import { Company } from './Company';

export class Ticker {
    id: number;
    CompanyId: number;
    Company: Company;
    Date: Date;
    ticker: string;
    TiingoBool: boolean;
    IexBool: boolean;
    YahooBool: boolean;

    exchange: string;
    assetType: string;
    priceCurrency: string;
    startDate: string;
    endDate: string;

    isEnabled: boolean;

    Isin: number;
    type: string;
    industry: string;
}
