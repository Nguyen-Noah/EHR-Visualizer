module.exports = {
    makeResource: (args, logger) => {
        const patient = {
            type: 'reference',
            fhirtype: 'reference',
            xpath: 'Observation.subject',
            definition: 'http://hl7.org/fhir/SearchParameter/clinical-patient',
            description: "The subject that the observation is about (if patient)",
        };

        const category = {
            type: 'token',
            fhirtype: 'token',
            xpath: 'Observation.category',
            definition: 'http://hl7.org/fhir/SearchParameter/Observation-category',
            description: 'The classification of the type of observation',
        };

        const date = {
            type: 'date',
            fhirtype: 'date',
            xpath: 'Observation.effectiveDateTime',
            definition: 'http://hl7.org/fhir/SearchParameter/clinical-date',
            description:"Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Date first version of the resource instance was recorded  * [CarePlan](careplan.html): Time period plan covers  * [CareTeam](careteam.html): Time period team covers  * [ClinicalImpression](clinicalimpression.html): When the assessment was documented  * [Composition](composition.html): Composition editing time  * [Consent](consent.html): When this Consent was created or indexed  * [DiagnosticReport](diagnosticreport.html): The clinically relevant time of the report  * [Encounter](encounter.html): A date within the period the Encounter lasted  * [EpisodeOfCare](episodeofcare.html): The provided date search value falls within the episode of care's period  * [FamilyMemberHistory](familymemberhistory.html): When history was recorded or last updated  * [Flag](flag.html): Time period when flag is active  * [Immunization](immunization.html): Vaccination  (non)-Administration Date  * [List](list.html): When the list was prepared  * [Observation](observation.html): Obtained date/time. If the obtained element is a period, a date that falls in the period  * [Procedure](procedure.html): When the procedure was performed  * [RiskAssessment](riskassessment.html): When was assessment made?  * [SupplyRequest](supplyrequest.html): When the request was made  ",
        };

        const code = {
            type: 'token',
            fhirtype: 'token',
            xpath: 'Observation.code',
            definition: 'http://hl7.org/fhir/SearchParameter/clinical-code',
            description:'Multiple Resources:     * [AllergyIntolerance](allergyintolerance.html): Code that identifies the allergy or intolerance  * [Condition](condition.html): Code for the condition  * [DeviceRequest](devicerequest.html): Code for what is being requested/ordered  * [DiagnosticReport](diagnosticreport.html): The code for the report, as opposed to codes for the atomic results, which are the names on the observation resource referred to from the result  * [FamilyMemberHistory](familymemberhistory.html): A search by a condition code  * [List](list.html): What the purpose of this list is  * [Medication](medication.html): Returns medications for a specific code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationDispense](medicationdispense.html): Returns dispenses of this medicine code  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [Observation](observation.html): The code of the observation type  * [Procedure](procedure.html): A code to identify a  procedure  * [ServiceRequest](servicerequest.html): What is being requested/ordered  ',
        };

        return {
            type: "Observation",
            profile: "http://hl7.org/fhir/observation.html",
            searchParam: [patient, category, date, code]
        }
    },
}