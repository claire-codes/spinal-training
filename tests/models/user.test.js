describe('User Model', function() {

    beforeEach(function() {
        this.user = new app.models.User({
            first_name: "Jimmy",
            last_name: "Wilson"
        });
    });

    afterEach(function() {
        this.user = null;
    });

    it('should exist', function() {
        expect(this.user).to.be.ok; // Tests this.user is truthy
    });

    it('should have a getFullName() method', function() {
        expect(typeof this.user.getFullName).to.equal('function');
    });

    it('calling getFullName should return first_name[space]last_name', function() {
        expect(this.user.getFullName()).to.equal('Jimmy Wilson');
    });

});