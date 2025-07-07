from openai import OpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv() 
client = OpenAI(
    api_key = os.getenv("OPENAI_API_KEY")
)
app = Flask(__name__)
CORS(app)  # this enables CORS for all domains by default, if running on public server, policy must be added for safety. 

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('userMessage') # get what the user has inputted 

    # format a response 
    completion = client.chat.completions.create(
        model="gpt-4o-mini", 
        max_tokens=500,
        messages=[
            {
                "role" :"system", "content" :"You are a helpful assistant."
            }, 
            {
                "role" :"user", 
                "content" : f"From these inputs: {user_input}, generate:\n- 2 multiple choice questions (4 options each)\n- 2 short answer questions\n- Include correct answers below each question."
            }
        ]
    )   

    # send the response back 
    return jsonify({'response': completion.choices[0].message.content})

if __name__ == '__main__':
    app.run(debug=True)
