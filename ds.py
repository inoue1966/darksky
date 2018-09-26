from flask import Flask, render_template, make_response
import simplejson as json

app = Flask(__name__)

@app.route('/index')
def index():
    """index"""
    return render_template('ds2.html', title='flask test')


# APIの実装
@app.route('/api', methods=['GET', 'POST'])
def get():
    
    return make_response(json.dumps(result, ignore_nan=True, ensure_ascii=False))


## おまじない
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)