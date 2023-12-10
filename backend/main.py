from moexalgo import Ticker
from fastapi import FastAPI
import datetime


app = FastAPI()


@app.get('/{ticker}')
def get_stock_data(ticker: str):
    curr_date = datetime.date.today()
    week_ago = curr_date - datetime.timedelta(weeks=1)
    curr_date, week_ago = str(curr_date), str(week_ago)
    try:
        data = Ticker(ticker).candles(period='1h', date=week_ago, till_date=curr_date)
        
        return {
            "price": data['open'].to_list(),
            "volume": data['volume'].to_list(),
            "time": data['begin'].to_list()
        }
    except LookupError:
        
        return {
            "Message": "Invalid ticker"
        }