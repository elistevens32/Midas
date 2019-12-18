import { Day } from './Day';
import { Ticker } from './Ticker';

export class EOD {
    id: number;
    DayId: number;
    Day: Day;
    TickerId: number;
    Ticker: Ticker;
    TiingoBool: Boolean;
    IexBool
    YahooBool
    Date: Date;
    Close: number;
    High: number;
    Low: number;
    Open: number;
    Volume: number;
    AdjClose: number;
    AdjHigh: number;
    AdjLow: number;
    AdjOpen: number;
    AdjVolume: number;
    DivCash: number;
    SplitFactor: number;
}
