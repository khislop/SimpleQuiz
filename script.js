$(document).ready(function() {
	var $value = null
	var $answer = null;
	var $finished = true;
	var $questions = 4;
    $(".lbutton").mouseenter(function() {
        $(this).css("background-color","green");
		if($("#question").text() == ""){
			$("#question").text("Click to see a question");
		}
    });
    $(".lbutton").mouseleave(function() {
        $(this).css("background-color","#ffb3ff");
		if($("#question").text() == "Click to see a question"){
			$("#question").text("");
		}
    });
	$('#c').click(function() {
		if($finished == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must first answer this question");
		}else{
			$("#question").text("In C++, an int is a primitive.");
			$("#sidebar ul").append("<p>C++</p>");
			$(this).remove();
			$answer = "true";
			$finished = null
			$questions = $questions - 1;
		}
    });
	$('#java').click(function() {
		if($finished == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must first answer this question");
		}else{
			$("#question").text("Java is a functional (in a technical sense) programming language.");
			$("#sidebar ul").append("<p>Java</p>");
			$(this).remove();
			$answer = "false";
			$finished = null
			$questions = $questions - 1;
		}
    });
	$('#php').click(function() {
		if($finished == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must first answer this question");
		}else{
			$("#question").text("PHP is most commonly used for client side applications.");
			$("#sidebar ul").append("<p>PHP</p>");
			$(this).remove();
			$answer = "false";
			$finished = null
			$questions = $questions - 1;
		}
    });
	$('#mysql').click(function() {
		if($finished == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must first answer this question");
		}else{
			$("#question").text("MySql is a language to mange databases.");
			$("#sidebar ul").append("<p>MySQL</p>");
			$(this).remove();
			$answer = "true";
			$finished = null
			$questions = $questions - 1;
		}
    });
	$("input:radio[name=ans]").click(function() {
		$value = $(this).val();
	});
	$("#submit").click(function() {
		if($answer == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must choose a topic below.");
		}else if ($value == null){
			$("#answer p").css("color","red");
			$("#answer p").text("You must check true or false.");
		}else if($value == $answer){
			$value = null;
			$("#radio1").prop("checked", false);
			$("#radio2").prop("checked", false);
			$("#answer p").css("color","green");
			$("#answer p").text("Correct!");
			$finished = true;
			if($questions <= 0){
				$("#content").append("<div id='circle'><p>The End!</p></div>");
				$("#circle").dblclick(function() {
					$("#circle").toggle("explode");
				});
			}
		}else{
			$value = null;
			$("#radio1").prop("checked", false);
			$("#radio2").prop("checked", false);
			$("#answer p").css("color","red");
			$("#answer p").text("Incorrect!");
			$finished = true;
			if($questions <= 0){
				$("#content").append("<div id='circle'><p>The End!</p></div>");
				$("#circle").dblclick(function() {
					$("#circle").toggle("explode");
				});
			}
		}
	});
});