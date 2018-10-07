#import simplejson as json
import json
import requests
from flask import Flask, render_template, make_response, request
from darksky_secret import DARKSKYKEY


class CustomFlask(Flask):
    """ jinjaデリミタの変更 """
    jinja_options = Flask.jinja_options.copy()
    jinja_options.update(dict(
        block_start_string='(%',
        block_end_string='%)',
        variable_start_string='((',
        variable_end_string='))',
        comment_start_string='(#',
        comment_end_string='#)',
    ))


app = CustomFlask(__name__)


@app.route('/index')
def index():
    """index"""
    return render_template('ds3.html', title='flask test')


# APIの実装
@app.route('/api', methods=['GET', 'POST'])
def get():
    """ get 35.2637,139.1502 """
    iti = request.args.get('iti')
    #print(iti)
    url = "https://api.darksky.net/forecast/"+DARKSKYKEY + \
        "/" + iti + "?units=si&lang=ja&exclude=currently,minutely,alerts,flags"
    ret = requests.get(url)
    jsondata = None
    if ret.status_code == 200:
        jsondata = ret.json()
        # print(jsondata)
    return make_response(json.dumps(jsondata, ensure_ascii=False))


# おまじない
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
