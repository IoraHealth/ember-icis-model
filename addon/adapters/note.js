import DS from 'ember-data';
import TokenAuthAdapter from "ember-icis-model/mixins/token-auth-adapter";

export default DS.RESTAdapter.extend(TokenAuthAdapter, {
  host: "https://staging.icisapp.com",
  namespace: "api/notes/v4"
});
