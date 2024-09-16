from flask import Flask
from sqlalchemy import create_engine
# from doqu import Base
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

# Database setup
# DATABASE_URL = 'postgresql://user:password@localhost:5432/portfolio_db'
# engine = create_engine(DATABASE_URL)
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@app.route('/')
def index():
    return "Portfolio API is running!"

if __name__ == "__main__":
    app.run(debug=True)