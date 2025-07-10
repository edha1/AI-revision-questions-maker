# AI Revision Questions Maker using Open AI API 


## Description 

This project is a full stack web application which allows users to input study notes and revision materials. Using the OpenAI API, The LLM will then make 2 multiple choice questions and 2 short answer questions, each with answers. This can allow students to revise effectively. 


## 📚 Features

- ✍️ Users can paste study notes.
- 🤖 Automatically generates custom practice questions using OpenAI's API.
- 🔄 Communication between Flask (backend) and React (frontend).
- ⚡ Built for speed and simplicity using Vite + React and Flask REST API.


## 🛠️ Tech Stack & Dependencies

### **Frontend** (React + Vite)
- **React** – UI library for building dynamic interfaces
- **Vite** – Fast modern build tool
- **Axios** – For making HTTP requests to the backend

### **Backend** (Flask + Python)
- **Flask** – Lightweight Python web server framework
- **OpenAI API** – Connects to the OpenAI API

## How to run and use 

To run this project, you will require an OpenAI API key, which you will need to add to the .env file. 

## 🚀 How to start servers

```bash
cd backend 
python app.py 
cd frontend 
npm run dev
```

### Resources Used 

**OpenAI Platform** 
**[python-dotenv 1.1.1](https://pypi.org/project/python-dotenv/)** 
