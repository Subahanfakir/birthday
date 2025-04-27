$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut(150).delay(1200).promise().done(function(){
			$('#play').fadeIn('medium');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut(100).delay(1200).promise().done(function(){
			$('#bannar_coming').fadeIn('medium');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut(170).delay(1200).promise().done(function(){
			$('#cake_fadein').fadeIn('fast');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}


	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		
		$(this).fadeOut('medium').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('fast');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('medium');
		$(this).fadeOut(120).delay(650).promise().done(function(){
			$('#light_candle').fadeIn('fast');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('medium');
		$(this).fadeOut(140).promise().done(function(){
			$('#wish_message').fadeIn('medium');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut(150).delay(620).promise().done(function(){
			$('#story').fadeIn('medium');
			$('#celebration-image-left').fadeIn('slow');
			$('#celebration-image-right').fadeIn('slow');
		});
	});
	
	$('#wish_message').click(function(){
		// reposition the balloons exactly as before…
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		/* … your other .attr() & .animate() calls … */
		$('.balloons h2').fadeIn(3000);
	  
		// fade out the wish button, then kick off images + story:
		$(this).fadeOut(100).delay(600).promise().done(function(){
		  // 1) show both celebration images
		  $('#celebration-image-left').fadeIn('slow');
		  $('#celebration-image-right').fadeIn('slow');
	  
		  // 2) start the message/story loop
		  const $message = $('.message');
		  const $ps      = $message.find('p');
		  const lastIdx  = $ps.length - 1; // index of your final-text
	  
		  // hide all paragraphs and show container
		  $ps.hide();
		  $message.fadeIn('medium');
	  
		  // recursive function to step through each <p>
		  (function showPara(i){
			if (i < lastIdx) {
			  $ps.eq(i)
				.fadeIn('medium').delay(800)
				.fadeOut('medium')
				.promise()
				.done(() => showPara(i+1));
			} else {
			  // when we hit the very last <p> (#final-text):
			  $('.cake').fadeIn('fast');
			  $ps.eq(i).fadeIn('slow');
			}
		  })(0); // start at paragraph 0
		}
		);
	});
});




//alert('hello');