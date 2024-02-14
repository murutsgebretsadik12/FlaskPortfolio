from flask import Flask, render_template,url_for, request
app =Flask(__name__)





@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')



@app.route('/skill')
def skill():
    return render_template('skill.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/service')
def service():
    return render_template('service.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/submit_form', methods=['POST'])
def submit_form():

    # retrieve form data from the request object
    name = request.form.get('name')

    return render_template('#', name=name)
if __name__ == '__main__':
    app.run(debug=True)