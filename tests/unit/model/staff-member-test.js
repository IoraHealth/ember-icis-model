/* jshint expr:true */
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'staff-member',
  'StaffMember',
  {
    needs: []
  },
  function() {
    describe("#name", function() {
      var model;

      beforeEach(function() {
        model = this.subject({first_name: 'Gorby', last_name: 'Thunderhorse'});
      });

      it("combines first and last name", function() {
        expect(model.get('name')).to.eq("Gorby Thunderhorse");
      });
    });
  }
);
