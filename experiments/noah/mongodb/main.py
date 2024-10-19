from db_connection import MongoDBConnectionManager
from dotenv import load_dotenv
from logger.logger_config import logger
from pathlib import Path

working_dir = Path(__file__).resolve().parent

load_dotenv(dotenv_path=f'{working_dir}/.env')

db_manager = MongoDBConnectionManager()
db = db_manager.get_database('fhir')
