from flask import Flask, render_template, jsonify, abort, make_response

app = Flask(__name__)

@app.route('/index')
def index():
    """index"""
    return render_template('ds2.html', title='flask test')

## おまじない
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)