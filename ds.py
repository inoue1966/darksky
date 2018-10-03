from flask import Flask, render_template, make_response
#import simplejson as json
import json
import requests
from darksky_secret import DARKSKYKEY


app = Flask(__name__)

@app.route('/index')
def index():
    """index"""
    return render_template('ds2.html', title='flask test')


# APIの実装
@app.route('/api', methods=['GET', 'POST'])
def get():
    url = "https://api.darksky.net/forecast/"+DARKSKYKEY+"/35.2637,139.1502?units=si&lang=ja&exclude=currently,minutely,alerts,flags"
    ret = requests.get(url)
    jsondata = None
    if ret.status_code == 200:
        jsondata = ret.json()
        
        #print(jsondata)
    return make_response(json.dumps(jsondata,  ensure_ascii=False))


## おまじない
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)