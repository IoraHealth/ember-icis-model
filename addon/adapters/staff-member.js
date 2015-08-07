import DS from 'ember-data';
import TokenAuthAdapter from "ember-icis-model/mixins/token-auth-adapter";

export default DS.RESTAdapter.extend(TokenAuthAdapter, {
  host: "CHANGEME",
  namespace: "api/staff/v2",

  pathForType: function() {
    return "staff_members";
  }
});
