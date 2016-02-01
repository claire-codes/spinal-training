describe('Profile View', function() {

    // Create a User model to pass into our view to give it data
    var model = new app.models.User({
        first_name: 'John',
        last_name: 'Black',
        age: 35
    });

    var mySpy;

    beforeEach(function() {
        // Set spy before instantiating View
        mySpy = sinon.spy(app.views.Profile.prototype, 'toggleFont');

        this.profile = new app.views.Profile({
            // Pass in a jQuery in memory <div> for testing the view rendering
            el: $('<div>'),
            model: model
        });
    });

    afterEach(function() {
        this.profile = null;
        app.views.Profile.prototype.toggleFont.restore();
    });

    it('should exist', function() {
        expect(this.profile).to.be.ok;
    });

    it('has a default element tag', function() {
        expect(this.profile.tagName).to.equal('div');
    });

    it('render()', function() {
        this.profile.render();

        expect(this.profile.$el.html().match(/John/)).to.be.ok;
        expect(this.profile.$el.html().match(/Black/)).to.be.ok;
        expect(this.profile.$el.html().match(/35/)).to.be.ok;
    });

    it('toggleFont()', function() {
        this.profile.render();
        expect(mySpy).not.to.have.been.calledOnce;
        this.profile.$el.find('button').click();
        expect(mySpy).to.have.been.calledOnce;
    });

});
