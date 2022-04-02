import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { Reset } from "./firebase.js";

$(function () {
	"use strict";

	window.AiLaTrieuPhu = window.AiLaTrieuPhu || {};

	(function (altp) {
		Reset();
		const db = getDatabase();
		const dataRef = ref(db);
		onValue(dataRef, (snapshot) => {
			const data = snapshot.val();
			if(data.questionReveal == 1){
				altp.RevealQuestion();
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
		})
	}(window.AiLaTrieuPhu = window.AiLaTrieuPhu || {}));
});

