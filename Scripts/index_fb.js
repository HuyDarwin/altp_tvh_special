import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { Reset } from "./firebase.js";

$(function () {
	"use strict";

	window.AiLaTrieuPhu = window.AiLaTrieuPhu || {};

	(function (altp) {
		const db = getDatabase();
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			if(data.questionReveal == 1){
				altp.RevealQuestion();
				$('.q-td').html(data.question);
				$('#answerAtext').html(data.answerA);
				$('#answerBtext').html(data.answerB);
				$('#answerCtext').html(data.answerC);
				$('#answerDtext').html(data.answerD);
				update(ref(db), { questionReveal: 0 })
			}
			if(data.questionReveal == 2){
				altp.RevealAnswers();
				update(ref(db), { questionReveal: 0 })
			}
			if(data.questionHide == 1){
				altp.HideQuestion();
				update(ref(db), { questionHide: 0 })
			}
			if(data.answerReveal >= 1 && data.answerReveal <= 4){
				altp.RevealAnswerText(data.answerReveal);
				update(ref(db), { answerReveal: 0 })
			}
			if(data.answerChoosenCounter == 1){
				altp.LockInAnswer(data.finalAnswer);
				update(ref(db), { answerChoosenCounter: 0 })
			}
			if(data.correctAnswerReveal == 1){
				altp.RevealCorrectAnswer(data.correctAnswer);
				update(ref(db), { correctAnswerReveal: 0 })
			}
			if(data.lifelineHolderReveal == 1){
				altp.RevealLifelineHolder();
				update(ref(db), { lifelineHolderReveal: 0 })
			}
			if(data.lifelineHolderHide == 1){
				altp.HideLifelineHolder();
				update(ref(db), { lifelineHolderHide: 0 })
			}
			if(data.moneyStrapReveal == 1){
				altp.RevealMoneyStrap();
				update(ref(db), { moneyStrapReveal: 0 })
			}
			if(data.follower == 1){
				altp.SetLevelOnMoneytree(data.qnow);
				update(ref(db), { follower: 0 })
			}
			if(data.moneytreeReveal == 1){
				$('.moneytree').css('opacity', 1);
				update(ref(db), { moneytreeReveal: 0 })
			}
			if(data.moneytreeHide == 1){
				$('.moneytree').css('opacity', 0);
				update(ref(db), { moneytreeHide: 0 })
			}
		})
		/*onValue(db, 'moneytree', (snapshot) => {
			const data2 = snapshot.val();
			money_prize = [data.q1,data.q2,data.q3,data.q4,data.q5,data.q6,data.q7,data.q8,data.q9,data.q10,data.q11,data.q12,data.q13,data.q14,data.q15];
		})*/
	}(window.AiLaTrieuPhu = window.AiLaTrieuPhu || {}));
});

