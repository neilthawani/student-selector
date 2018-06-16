import Ember from "ember";
import Students from "student-selector/fixtures/students";

export default Ember.Controller.extend({
    studentOptions: Students,
    selectedStudentIndex: Ember.computed("studentOptions", {
        get: function() {
            return Math.floor(Math.random() * this.get("studentOptions.length"));
        },
        set: function(key, value) {
            return value;
        }
    }),
    selectedStudent: Ember.computed("studentOptions", "selectedStudentIndex", function() {
        var studentOptions = this.get("studentOptions"),
            selectedStudentIndex = this.get("selectedStudentIndex");

        return studentOptions && studentOptions[selectedStudentIndex]
    }),

    actions: {
        chooseStudent: function() {
            var selectedStudentIndex = this.get("selectedStudentIndex"),
                randomNumber = Math.floor(Math.random() * this.get("studentOptions.length"));

            if (selectedStudentIndex === randomNumber) {
                randomNumber += 1;
            }

            this.set("selectedStudentIndex", randomNumber);
        }
    }
});
