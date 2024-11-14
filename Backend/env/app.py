# @app.route('/')
# def home():
#     return "Hello, PopcornGuru!"
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MOVIES = [
    {"title": "Inception", "genre": "sci-fi", "language": "english"},
    {"title": "Parasite", "genre": "thriller", "language": "korean"},
    {"title": "Spirited Away", "genre": "animation", "language": "japanese"},
    {"title": "The Dark Knight", "genre": "action", "language": "english"},
    {"title": "Amélie", "genre": "romance", "language": "french"},
]

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    genre = data.get('genre', '').lower()
    language = data.get('language', '').lower()
    recommendations = [
        movie for movie in MOVIES
        if movie['genre'] == genre and movie['language'] == language
    ]
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
