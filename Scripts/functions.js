$(function () {
	"use strict";

	window.AiLaTrieuPhu = window.AiLaTrieuPhu || {};

	(function (altp) {
		altp.PlayASound = function(filename, n){
			if(n == 1){
				at =  new Audio(filename);
				at.play();
			}
			else if(n == 2){
				at2 =  new Audio(filename);
				at2.play();
			}
			else if(n == 3){
				at3 =  new Audio(filename);
				at3.play();
			}
			else if(n == 4){
				at4 =  new Audio(filename);
				at4.play();
			}
			else if(n == 5){
				at5 =  new Audio(filename);
				at5.play();
			}
		};
		altp.StopAllSounds = function(){
			at.pause();
			at2.pause();
			at3.pause();
			at4.pause();
			at5.pause();
			at.CurrentTime = 0;
			at2.CurrentTime = 0;
			at3.CurrentTime = 0;
			at4.CurrentTime = 0;
			at5.CurrentTime = 0;
		}
		$.fn.rotateX = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration * 1000, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotateX(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		$.fn.rotateY = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration * 1000, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotateY(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		$.fn.rotateZ = function(angle, duration, start, easing, complete) {
		  var args = $.speed(duration * 1000, easing, complete);
		  var step = args.step;
		  return this.each(function(i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function(now) {
			  $.style(e, 'transform', 'rotateZ(' + now + 'deg)');
			  if (step) return step.apply(e, arguments);
			};

			$({deg: start}).animate({deg: angle}, args);
		  });
		};
		altp.RevealQuestion = function(){
			$('.prize').css('opacity', 0);
			$('.q-table').css('opacity', 1);
			$('.question').animate({'bottom':'-75px'}, 0, 'linear', function(){
				$('.question').animate({'bottom':'250px'}, 350, 'linear', function(){
					$('.question').animate({'bottom':'225px'}, 150, 'linear');
				});
			});
		}
		altp.HideQuestion = function(){
			$('.answer').animate({'bottom':'-75px'}, 500, 'linear');
			$('.question').animate({'bottom':'-225px'}, 900, 'linear');
		}
		altp.RevealAnswers = function(){
			$('.a-f-img, .a-c-img, .diagonal, .letter, .answer-text').css('opacity',0);
			$('.answer').animate({'bottom':'325px'}, 500, 'linear');
			$('.question').animate({'bottom':'475px'}, 500, 'linear');
		}
		altp.RevealAnswerText = function(at){
			var l = String.fromCharCode(at + 64);
			$('#answer' + l + 'diagonal, #answer' + l + 'letter, #answer' + l + 'text').animate({opacity:1}, 200, 'linear');
		}
		altp.LockInAnswer = function(fa){
			$('.a-f-img').css('opacity',0);
			$('#answer'+ fa.toUpperCase() +'final').animate({ opacity: 1 }, 500);
		}
		altp.RevealCorrectAnswer = function(ca){
			$('.a-c-img').css('opacity',0);
			$('#answer'+ ca.toUpperCase() +'correct').animate({ opacity: 1 }, 500);
		}
		altp.RevealLifelineHolder = function(){
			$('.lifeline-holder').rotateX(-90, 0);
			$('.lifeline-holder').animate({perspective:4096, opacity: 1, 'bottom':'0px'}, 0, function(){
				$('.lifeline-holder').animate({perspective:4096, 'bottom':'145px'}, 500, 'linear');
				$('.lifeline-holder').rotateX(0, 0.5, -90);
			})
		}
		altp.HideLifelineHolder = function(){
			$('.lifeline-holder').animate({perspective:4096, 'bottom':'0px'}, 500, 'linear');
			$('.lifeline-holder').rotateX(-90, 0.5, 0, function(){
				$('.lifeline-holder').css('opacity', 0);
			});
		}
		altp.RevealMoneyStrap = function(){
			$('.answer').animate({'bottom':'-75px'}, 750, 'linear');
			$('.question').rotateX(90, 0.375);
			$('.question').animate({'bottom':'350px'}, 375, 'linear', function(){
				$('.q-table').css('opacity', 0);
				$('.prize').css('opacity', 1);
				$('.question').rotateX(0, 0.375, -90);
				$('.question').animate({'bottom':'225px'}, 375, 'linear');
			});
		}
		
		var htmlTableString = "";
	
		for (var i = 14; i >= 0; i--){
			htmlTableString += "<tr id='mn-tr" + (i+1) + "'>";
			
			if((i+1)%10 === 5){
				htmlTableString += "<td class='mn-l-w'>"
			}
			else{
				if((i+1)%10 == 0){
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
				if((i+1)%10 == 0){
					htmlTableString += "<td class='mn-a-w'>"
				}
				else{
					htmlTableString += "<td class='mn-a'>"
				}
			}
			
			if(i == 14)
			{
				htmlTableString += money_prize[i];
			}
			else
			{
				htmlTableString += money_prize[i];
			}

			
			htmlTableString += "</td>"
			htmlTableString += "</tr>"
		}
		
		$('.moneytree-table').html(htmlTableString);
		
		altp.SetLevelOnMoneytree = function(level){
			$('.mn-l-w').css('color','#FFFFFF');
			$('.mn-a-w').css('color','#FFFFFF');
			$('.mn-l').css('color','#E5A82C');
			$('.mn-a').css('color','#E5A82C');
			$('.mn-a-w').css('background-image','none');
			$('.mn-l').css('background-image','none');
			$('.mn-l-w').css('background-image','none');
			$('.mn-a').css('background-image','none');
			$('.mn-dia').css('background-image','none');
			$('.mn-dia').css('background-image','none');

			for(var i = 1; i < level; i++){
				var targetId = '#mn-tr' + (i + 1);
				$(targetId + ' .mn-dia').css('background-image','url(' + 'white_diagonal_money_tree.png' +')');
				
				if((i + 1) == level){
					$(targetId + ' td').css('background-image','url(' + 'Images/follower.png' +')');
					$(targetId + ' .mn-a').css('color','#000000');
					$(targetId + ' .mn-l').css('color','#000000');
					$(targetId + ' .mn-l-w').css('color','#FFFFFF');
					$(targetId + ' .mn-a-w').css('color','#FFFFFF');
					$(targetId + ' .mn-dia').css('background-image','url(' + 'Images/white_diagonal_money_tree_highlight.png' +')');
				}
			}
		}
	}(window.AiLaTrieuPhu = window.AiLaTrieuPhu || {}));
});