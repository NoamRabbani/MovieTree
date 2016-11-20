/**
 * Created by Ericp on 2016-11-18.
 */

// The only reason I need this is because I just can't use autofocus, it causes issue during animation
// We can't focus the textarea until the animation is finished, 800ms would be enough
setTimeout(function () {
    var ans = document.getElementById("ans-textarea");
    ans.focus();
    ans.bind('keypress', function (e) {
        if ((e.keyCode || e.which) == 13) {

            alert("enter");

            return false;
        }
    });
}, 800);