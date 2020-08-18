from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Tae'
socketio = SocketIO(app)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/session')
def sessions():
    return render_template('session.html')


def message_received(methods=['GET', 'POST']):
    print('message was received!!!')


@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=message_received)


if __name__ == '__main__':
    socketio.run(app, debug=True)
 # app.run('0.0.0.0', port=5000, debug=True
