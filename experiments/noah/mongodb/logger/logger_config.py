from pathlib import Path
import logging.config
import json

working_dir = Path(__file__).resolve().parent

def setup_logging():
    config_file = working_dir / 'config.json'
    with config_file.open('r') as f:
        config = json.load(f)

    logs_dir = working_dir.parent / 'logs'
    if not logs_dir.exists():
        logs_dir.mkdir(parents=True)

    # we need to dynamically set the output file since .json doesnt support variables, should probably find better solution
    config['handlers']['file']['filename'] = str(logs_dir / 'MongoDB.log')
    
    logging.config.dictConfig(config)

setup_logging()

logger = logging.getLogger('MongoDB')