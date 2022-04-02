import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { Update } from "./firebase.js";

$(function () {
	"use strict";

	window.AiLaTrieuPhu = window.AiLaTrieuPhu || {};

	(function (altp) {
		var qr = 0;
		$(".rq").click(function() {
			update(ref(db), { questionReveal: 1 , correctAnswer: ca })
		});
		$(".ras").click(function() {
			update(ref(db), { questionReveal: 2 })
		});
		$(".rea").click(function() {
			if(ar >= 4){
				ar = 0;
			}
			ar++;
			$(".rea").html('Reveal Answer ' + String.fromCharCode(ar + 65));
			update(ref(db), { answerReveal: ar })
		});
		$(".lkA").click(function() {
			fa = "A";
			$('.rca').html('Reveal Correct Answer (' + ca + ')');
			if(fa != ca) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkB").click(function() {
			fa = "B";
			$('.rca').html('Reveal Correct Answer (' + ca + ')');
			if(fa != ca) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkC").click(function() {
			fa = "C";
			$('.rca').html('Reveal Correct Answer (' + ca + ')');
			if(fa != ca) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkD").click(function() {
			fa = "D";
			$('.rca').html('Reveal Correct Answer (' + ca + ')');
			if(fa != ca) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".rca").click(function() {
			update(ref(db), { correctAnswer: ca , correctAnswerReveal: 1 })
		});
		$(".hq").click(function() {
			update(ref(db), { questionHide: 1 })
		});
		$('.rlh').click(function() {
			update(ref(db), { lifelineHolderReveal: 1 })
		});
		$('.hlh').click(function() {
			update(ref(db), { lifelineHolderHide: 1 })
		});
	}(window.AiLaTrieuPhu = window.AiLaTrieuPhu || {}));
});

const db = getDatabase();
const dataRef = ref(db);
onValue(dataRef, (snapshot) => {

})