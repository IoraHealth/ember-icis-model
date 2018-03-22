
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import TokenAuthAdapterMixin from 'ember-icis-model/mixins/token-auth-adapter';

describe('TokenAuthAdapterMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var TokenAuthAdapterObject = Ember.Object.extend(TokenAuthAdapterMixin);
    var subject = TokenAuthAdapterObject.create();
    expect(subject).to.be.ok;
  });

  it('returns an authorization header', function() {
    var TokenAuthAdapterObject = Ember.Object.extend(TokenAuthAdapterMixin);
    var subject = TokenAuthAdapterObject.create();
    subject.accessTokenWrapper = { token: "MYTOKEN" };
    expect(subject.get('headers')).to.eql({ AUTHORIZATION: 'Bearer MYTOKEN' });
  });
});
