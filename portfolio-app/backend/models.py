from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Portfolio(Base):
    __tablename__ = 'portfolios'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    assets = Column(String)  # Could be a JSON field of stocks, bonds, etc.
    expected_return = Column(Float)
    risk = Column(Float)