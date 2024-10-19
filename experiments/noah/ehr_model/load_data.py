import os, json
import pandas as pd
from pathlib import Path

DATASET_PATH = 'experiments/noah/ehr_model/dataset'
dataset_dir = Path(DATASET_PATH)

data = []
for json_file in dataset_dir.rglob('*.json'):
    with open(json_file, 'r') as f:
        data = json.load(f)

        patient_info = {
            'gender': data['entry'][0]['resource'].get('gender', None),
            'birth_date': data['entry'][0]['resource'].get('birthDate', None)
        }

'''
data['entry'][1]['resource']['status'] = finished
data['entry'][1]['resource']['class'] = {'code': 'outpatient'}
data['entry'][1]['resource']['type'] = [{'coding': [{'system': 'http://snomed.info/sct', 'code': '185349003'}], 'text': 'Outpatient Encounter'}]
data['entry'][1]['resource']['period'] = {'start': '2010-06-19T06:36:10-04:00', 'end': '2010-06-19T06:56:35-04:00'}
data['entry'][1]['resource'][reason] = {'coding': [{'system': 'http://snomed.info/sct', 'code': '72892002', 'display': 'Normal pregnancy'}]}
'''