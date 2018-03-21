
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'patient',
  'Patient',
  {
    needs: ['serializer:patient', 'model:practice']
  },

  function() {
    // Replace this with your real tests.
    it('serializes records', function() {
      var record = this.subject();
      var serializedRecord = record.serialize();

      expect(serializedRecord).to.be.ok;
    });

  }
);
