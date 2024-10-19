from pymongo import MongoClient
from logger.logger_config import logger
import os

class MongoDBConnectionManager:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(MongoDBConnectionManager, cls).__new__(cls)
            cls._instance._client = None
        return cls._instance
    
    def __init__(self) -> None:
        if not self._client:
            db_path = os.getenv('DB_PATH')
            if not db_path:
                logger.error("DB_PATH is not set in the .env file")
                raise ValueError("DB_PATH is not set in the .env file")
            
        try:
            self._client = MongoClient(db_path)
            logger.info("MongoDB connection established.")
        except Exception as e:
            logger.exception("Failed to connect to MongoDB")
            raise ConnectionError(f"Failed to connect to MongoDB: {e}")
        
    def get_database(self, db_name):
        if self._client:
            logger.info(f"Getting database: {db_name}")
            return self._client[db_name]
        else:
            logger.error("No MongoDB client instance found.")
            return None