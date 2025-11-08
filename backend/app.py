from flask import Flask, request, jsonify
import PyPDF2, openai, re

app = Flask(__name__)

openai.api_key = "YOUR_API_KEY"

@app.route("/classify", methods=["POST"])
def classify():
    file = request.files["file"]
    pdf_reader = PyPDF2.PdfReader(file)
    text = " ".join([page.extract_text() or "" for page in pdf_reader.pages])

    # quick regex scan
    pii = re.findall(r"\d{3}-\d{2}-\d{4}", text)  # SSN pattern
    category_hint = "Highly Sensitive" if pii else "Unknown"

    # ask LLM
    prompt = f"""
    Classify this document as Public, Confidential, Highly Sensitive, or Unsafe.
    Give JSON with: category, reasoning, and citations (page numbers or snippets).
    Content:\n{text[:4000]}...
    """

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    answer = response.choices[0].message["content"]
    return jsonify({"hint": category_hint, "llm_response": answer})
