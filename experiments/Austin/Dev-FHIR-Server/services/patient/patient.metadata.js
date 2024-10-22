module.exports = {
    makeResource: (args, logger) =>{
        const name =  {
            type: 'string',
            fhirtype: 'string',
            xpath: 'Patient.name',
            definition: 'http://hl7.org/fhir/SearchParameter/Patient-name',
            description:
              'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
        }

        const identifier = {
            type: 'token',
            fhirtype: 'token',
            xpath: 'Patient.identifier',
            definition: 'http://hl7.org/fhir/SearchParameter/Patient-identifier',
            description: 'A patient identifier',
        };

        return {
            type: 'Patient',
            profile: {
                reference: 'http://hl7.org/fhir/patient.html'
            },
            searchParam: [identifier, name]
        };
    },
};