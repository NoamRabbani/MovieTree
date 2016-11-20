/**
 * Created by Ericp on 2016-11-18.
 */
function startSurvey(e) {
    if (e.keyCode == 13) {
        e.preventDefault(); // avoid line break

        window.location.href = "/view_question_1?";

    }
}