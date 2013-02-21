import os
from flask import Flask, redirect, url_for

app = Flask(__name__)


# Home page. Index link for all assignments
@app.route('/')
def hello():
    return redirect(url_for('static', filename='Index.html'))

# # Assignment 1: Chapter two section 2.1-2.8
# @app.route('/assignment')
# def assignment1():
#     return redirect(url_for('static', filename='assignment.html'))

# # Assignment 2: Chapter two section 2.9 
# @app.route('/assignmentforum')
# def assignmentforum():
#     return redirect(url_for('static', filename='assignmentforum.html'))


# # Assignment 3: Exercise 3.1
# @app.route('/assignment3')
# def assignment3():
#     return redirect(url_for('static', filename='assignment3.html'))


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)