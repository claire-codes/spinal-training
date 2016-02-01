(function(global, $, _, Backbone, undefined) {

    app.views.Profile = Backbone.View.extend({

        events: {
                "click button": "toggleFont"
        },

        toggleFont: function() {
                this.$el.toggleClass('toggled');
        },

        render: function() {
            var html = "<h1>"+ this.model.getFullName() +"</h1>" +
                "<p>"+ this.model.get('first_name') +" is "+ this.model.get('age') + " years old" +
                "<p><button>Toggle font</button></p>";

            this.$el.html(html);
        }

    });

})(this, $, _, Backbone);
