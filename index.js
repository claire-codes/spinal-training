var user = new app.models.User({
    first_name: "Jimmy",
    last_name: "Wilson",
    age: 42
});

var usersView = new app.views.Profile({
    model: user,
    el: $('#floop')
});
$('#floop').append(usersView.render());