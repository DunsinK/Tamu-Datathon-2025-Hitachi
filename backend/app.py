from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import PyPDF2, re, base64, openai
from openai import OpenAI
import os

load_dotenv()
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
client = OpenAI(
    base_url = "https://openrouter.ai/api/v1",
    api_key = os.environ.get("OPENROUTER_API_KEY")
)
#Helper Functions
def encode_file_to_base64(file_storage):
    """Reads a Flask FileStorage object and returns a base64 encoded string."""
    # Read the file's binary data
    file_storage.seek(0) # Ensure we read from the start
    file_data = file_storage.read()
    
    # Base64 encode and decode to UTF-8 string
    return base64.b64encode(file_data).decode('utf-8')



# Routes
@app.route('/about')
def about():
    print("testing about page")
    return 'This is the about page'

@app.route("/classify", methods=["POST"])
def classify():
    print("Entered Classify")
    #return jsonify({"helloworld": hello_world});
    file = request.files["file"] 
    base64File = encode_file_to_base64(file)
    pdf_reader = PyPDF2.PdfReader(file)
    text = " ".join([page.extract_text() or "" for page in pdf_reader.pages])

    # quick regex scan
    pii = re.findall(r"\d{3}-\d{2}-\d{4}", text)  # SSN pattern
    category_hint = "Highly Sensitive" if pii else "Unknown"

    # ask LLM
    #print(base64File)
    prompt = f"""
    Classify this document as Public, Confidential, Highly Sensitive, or Unsafe.
    Give JSON with: category, reasoning, and citations (page numbers or snippets).
    Content your response will be sent staight into python jsonify so only include JSON: \n{text[:4000]} ...
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    answer = response.choices[0].message.content
    print(answer)
    return jsonify({"hint": category_hint, "llm_response": answer})
