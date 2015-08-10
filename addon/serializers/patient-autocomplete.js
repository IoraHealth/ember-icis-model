import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  
  normalizePayload: function(payload) {
    payload.patient_autocompletes = payload.patients;
    delete payload.patients;

    return payload;
  }
});
