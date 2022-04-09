import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { Update, Reset } from "./firebase.js";

$(function () {
	"use strict";

	window.AiLaTrieuPhu = window.AiLaTrieuPhu || {};

	(function (altp) {
		Reset();
		var qr = 0;
		$(".rq").click(function() {
			$('.rca').css('background-color', 'white');
			$('.rca').html('Reveal Correct Answer (.)');
			update(ref(db), { questionReveal: 1 })
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
			fa = "a";
			$('.rca').html('Reveal Correct Answer (' + chuoi_cau_hoi[qnow].CorrectAnswer + ')');
			if(fa != chuoi_cau_hoi[qnow].CorrectAnswer) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkB").click(function() {
			fa = "b";
			$('.rca').html('Reveal Correct Answer (' + chuoi_cau_hoi[qnow].CorrectAnswer + ')');
			if(fa != chuoi_cau_hoi[qnow].CorrectAnswer) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkC").click(function() {
			fa = "c";
			$('.rca').html('Reveal Correct Answer (' + chuoi_cau_hoi[qnow].CorrectAnswer + ')');
			if(fa != chuoi_cau_hoi[qnow].CorrectAnswer) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".lkD").click(function() {
			fa = "d";
			$('.rca').html('Reveal Correct Answer (' + chuoi_cau_hoi[qnow].CorrectAnswer + ')');
			if(fa != chuoi_cau_hoi[qnow].CorrectAnswer) {
				$('.rca').css('background-color', 'red');
			}
			else{
				$('.rca').css('background-color', 'lime');
			}
			update(ref(db), { finalAnswer: fa , answerChoosenCounter: 1 })
		});
		$(".rca").click(function() {
			update(ref(db), { correctAnswerReveal: 1 })
		});
		$('.rms').click(function(){
			update(ref(db), { moneyStrapReveal: 1 })
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
		$('.lqx').click(function() {
			chuoi_cau_hoi = [];
			$.ajax({
				type: "GET",
				url: "XML/questions.xml",
				dataType: "xml",
				async: true,
				success: function (xml) {
					try {
						var x = $(xml).find('question');
						var y;
						for(var i = 0; i <= 14; i++){
							if($(x[i]).find('a')[0].attributes[0].value == "yes"){
								y = "a";
							}
							else if($(x[i]).find('b')[0].attributes[0].value == "yes"){
								y = "b";
							}
							else if($(x[i]).find('c')[0].attributes[0].value == "yes"){
								y = "c";
							}
							else if($(x[i]).find('d')[0].attributes[0].value == "yes"){
								y = "d";
							}
							chuoi_cau_hoi.push({
								Question: $(x[i]).find('text')[0].textContent.replace("++++","<br />"),
								AnswerA: $(x[i]).find('a')[0].textContent,
								AnswerB: $(x[i]).find('b')[0].textContent,
								AnswerC: $(x[i]).find('c')[0].textContent,
								AnswerD: $(x[i]).find('d')[0].textContent,
								CorrectAnswer: y
							})
						}
					}
					catch (e) {
						console.log(e);
					}
				},
				error: function (e) {
					console.log(e.message || e.Message);
				}
			});
			setTimeout(function(){
				for(var i = 1; i <= 15; i++){
					$('.question_selection').append('<option value="' + i + '">' + i + '. ' + chuoi_cau_hoi[i - 1].Question + '</option>');
				}
			}, 500)
		});
		$('.utq').click(function(){
			var goal;
			goal = $('.question_selection').val() - 1;
			var cch = chuoi_cau_hoi[goal];
			qnow = goal;
			update(ref(db), { question : cch.Question, answerA: cch.AnswerA, answerB: cch.AnswerB, answerC: cch.AnswerC, answerD: cch.AnswerD, correctAnswer: cch.CorrectAnswer})
		})
		
		// Moneytree
		
		var htmlTableString = "";
	
		for (var i = 14; i >= 0; i--){
			htmlTableString += "<tr id='mn-tr" + (i+1) + "'>";
			
			if((i+1)%10 === 5){
				htmlTableString += "<td class='mn-l-w'>"
			}
			else{
				if((i+1)%10 == 0 && risk == false){
					htmlTableString += "<td class='mn-l-w'>"
				}
				else{
					htmlTableString += "<td class='mn-l'>"
				}
			}
			
			htmlTableString += (i + 1);
			htmlTableString += "</td>"
			htmlTableString += "<td class='mn-dia'></td>"
			
			if((i+1)%10 === 5){
				htmlTableString += "<td class='mn-a-w'>"
			}
			else{
				if((i+1)%10 == 0 && risk == false){
					htmlTableString += "<td class='mn-a-w'>"
				}
				else{
					htmlTableString += "<td class='mn-a'>"
				}
			}
			
			if(i == 14)
			{
				htmlTableString += money_prize[i];
				update(ref(db, "moneytree"), { ["q" + (i+1)] : money_prize[i] });
			}
			else
			{
				htmlTableString += money_prize[i];
				update(ref(db, "moneytree"), { ["q" + (i+1)] : money_prize[i] });
			}

			
			htmlTableString += "</td>"
			htmlTableString += "</tr>"
		}
		
		$('.moneytree-table').html(htmlTableString);
		
		var top_index = 10;
		for (var i = 14; i >= 0; i--){
			$('.moneytree-button-holder').append("<button class='money-button' id='money_" + (i+1) + "' style='top:" + top_index + "px'></button>");
			$('#money_' + (i+1)).html(i+1);
			top_index += 40;
		}
		$('.money-button').css({'width':'30px'});
		
		$('.money-button').click(function(){
			update(ref(db), { qnow : this.id.slice(6) });
			update(ref(db), { follower : 1 });
			$('.moneytree tr').css('background-color', 'transparent');
			$('.moneytree tr td').css('color', 'E5A82C');
			$('#mn-tr5 td, #mn-tr10 td, #mn-tr15 td').css('color', 'white');
			$('#mn-tr' + this.id.slice(6)).css('background-color', 'orange');
			if(this.id.slice(6) % 5 != 0){
				$('#mn-tr' + this.id.slice(6) + ' td').css('color', 'black');
			}
		})
		$('.mst').click(function(){
			/*for(var j = 1; j <= 15; j++){
				setTimeout(function(){
					update(ref(db), { qnow : j });
					update(ref(db), { follower : 1 });
					$('.moneytree tr').css('background-color', 'transparent');
					$('.moneytree tr td').css('color', 'E5A82C');
					$('#mn-tr5 td, #mn-tr10 td, #mn-tr15 td').css('color', 'white');
					$('#mn-tr' + j).css('background-color', 'orange');
					if(i % 5 != 0){
						$('#mn-tr' + j + ' td').css('color', 'black');
					}
				}, 200);
			}*/
				update(ref(db), { qnow : 0 });
				update(ref(db), { follower : 1 });
				$('.moneytree tr').css('background-color', 'transparent');
				$('.moneytree tr td').css('color', 'E5A82C');
				$('#mn-tr5 td, #mn-tr10 td, #mn-tr15 td').css('color', 'white');
		})
		$('.rm').click(function(){
			update(ref(db), { moneytreeReveal : 1 });
		})
		$('.hm').click(function(){
			update(ref(db), { moneytreeHide : 1 });
		})
	}(window.AiLaTrieuPhu = window.AiLaTrieuPhu || {}));
});

const db = getDatabase();
const dataRef = ref(db);
onValue(dataRef, (snapshot) => {

})