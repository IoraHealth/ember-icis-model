import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  primaryKey: 'guid',
  attrs: {
    practice: {
      embedded: 'always'
    }
  }
});
