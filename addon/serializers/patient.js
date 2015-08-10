import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: 'guid',
  attrs: {
    practice: {
      embedded: 'always'
    }
  }
});
