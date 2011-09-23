// Create a new YUI instance and populate it with the required modules.
YUI().use(['node-event-delegate','node-event-simulate','node-style','test'], function (Y) {
    var testCase = new Y.Test.Case({

        name: "Test YUI Autogrow",

        //---------------------------------------------
        // Setup and tear down
        //---------------------------------------------

        setUp : function () {
            this.area1 = Y.one('#area1');
            this.area2 = Y.one('#area2');
        },

        tearDown : function () {
            delete this.area1;
            delete this.area2;
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------

        test_textareas_start_with_expected_sizes: function () {
            var area1Height = this.area1.getStyle('height');
            var area2Height = parseInt(this.area2.getStyle('height').replace('px',''),10);
            Y.Assert.areEqual(area1Height, '100px', "First textarea height should be 100px");
            Y.Assert.isTrue(area2Height > 200, "Second textarea height should be greater then 200px");
        },

        test_that_height_changes_on_keyup: function() {
            this.area1.setContent(this.area2.getContent());
            this.area1.simulate('keyup');
            Y.Assert.areEqual(this.area1.getStyle('height'), this.area2.getStyle('height'), "Both heights should be equal when contents are equal.");
        }

    });
    //add the test cases and suites
    Y.Test.Runner.add(testCase);
    //run all tests
    Y.Test.Runner.run();
});

