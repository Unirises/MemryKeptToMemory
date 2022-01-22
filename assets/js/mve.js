$(document).ready(function() {

    if ($(window).width() < 800) {
        $(".background").css({ "background-image": "none", "background-color": "#D12E2D" });
    } else {
        $('#d_pc').addClass('d-none');
        $('#gameMVE').removeClass('d-none');
    }

    var music_detect = 'off';
    $('#music_play').click(function() {
        if (music_detect == 'on') {
            offMusic();
        } else {
            onMusic();
        }
    });

    function onMusic() {
        music_detect = "on";
        $("#music_bg")[0].play();
        $("#music_bg")[0].volume = 0.2;
        $("#music_bg")[0].loop = true;
        $("#music_play").attr('src', 'assets/img/music_on.png');
    }



    function offMusic() {
        $("#music_bg")[0].pause();
        music_detect = "off";
        $('#music_play').attr('src', 'assets/img/music_off.png');
    }
    // music 
    function correct() {
        var myAudio = new Audio("assets/music/right_answer.mp3");
        myAudio.play();
    }

    function wrong() {
        var myAudio = new Audio("assets/music/wrong_answer.wav");
        myAudio.play();
    }

    function oneMoreChange() {
        var myAudio = new Audio("assets/music/one_more_chance.mp3");
        myAudio.play();
    }

    function cheer() {
        var myAudio = new Audio("assets/music/cheer.wav");
        myAudio.play();
    }

    $("#nextThankyou").click(function() {
        $('#thankyou').addClass('d-none');
        $('#form_game').removeClass('d-none');
        $(".background").css({ "background-image": "none", "background-color": "white" });
    });
    $('#nextPage1').click(function() {
        $('#page1').addClass('d-none');
        $('#page2').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg1.png)');
    });
    $('#nextPage2').click(function() {
        $('#page2').addClass('d-none');
        $('#page3').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg1.png)');
    })
    $('#nextPage3').click(function() {
        $('#page3').addClass('d-none');
        $('#question1').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg4.png)');
    })
    $('#nextQuestion1').click(function() {
        $('#question1').addClass('d-none');
        $('#question2').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg2.png)');
    })
    $('#nextQuestion2').click(function() {
        $('#question2').addClass('d-none');
        $('#question3').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg3.png)');
    })
    $('#nextQuestion3').click(function() {
        $('#question3').addClass('d-none');
        $('#bonus').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/bg2.png)');
    })
    $('#nextBonusQuestion').click(function() {
        $('#bonus').addClass('d-none');
        $('#bonusQuestion1').removeClass('d-none');
        // $('.background').css('background-image', 'url(assets/img/bg1.png)');
    })
    $('#nextBonusQuestionBTN').click(function() {
        $('#bonusQuestion1').addClass('d-none');
        $('#thankyou').removeClass('d-none');
        cheer();
        $('.background').css('background-image', 'url(assets/img/bg5.png)');
    })


    // function game 

    var g1 = 0;
    var g2 = 0;
    var g3 = 0;
    var bonus = 0;

    $("#bunnyBTN1").on('click', function() {
        if (g1 == 0) {
            game_q1('bunnyBTN1');
            correct();
            g1 = 1;
        }

    })
    $("#bunnyBTN2").on('click', function() {
        if (g1 == 0) {
            game_q1('bunnyBTN2');
            wrong();
            g1 = 1;
        }

    })

    $('#q2_ans1').click(function() {
        if (g2 == 0) {
            game_q2('q2_ans1')
            wrong();
            g2 = 1;
        }
    })
    $('#q2_ans2').click(function() {
        if (g2 == 0) {
            game_q2('q2_ans2');
            correct();
            g2 = 1;
        }
    })

    $('#q3_ans2').click(function() {
        if (g3 == 0) {
            game_q3('q3_ans2')
            wrong();
            g3 = 1;
        }
    })
    $('#q3_ans1').click(function() {
        if (g3 == 0) {
            game_q3('q3_ans1')
            correct();
            g3 = 1;
        }
    })

    $('#bonus_ans2').click(function() {
        if (bonus == 0) {
            game_bonus('bonus_ans2');
            wrong();
            bonus = 1;
        }
    })
    $('#bonus_ans1').click(function() {
        if (bonus == 0) {
            game_bonus('bonus_ans1');
            correct();
            bonus = 1;
        }
    })



    function game_q1(selector) {
        $("#" + selector).css('opacity', '.5');
        $('#nextQuestion1').removeClass('d-none');
        $('#msg_c_show').removeClass('d-none');
        $('#changeQ1').text('ANSWER 01')
    }

    function game_q2(selector) {
        $("#" + selector).css('opacity', '.5');
        setTimeout(
            function() {
                oneMoreChange()
            }, 500);
        setTimeout(
            function() {
                $('#nextQuestion2').removeClass('d-none');
            }, 5500);

        $('#changeQ2').text('ANSWER 02')
    }

    function game_q3(selector) {
        $("#" + selector).css('opacity', '.5');
        $('#nextQuestion3').removeClass('d-none');
        $('#msg_c_q3_show').removeClass('d-none');
        $('#changeQ3').text('ANSWER 02')
    }

    function game_bonus(selector) {
        $("#" + selector).css('opacity', '.5');
        $('#hideQuestionBonus').addClass('d-none')
        $('#nextBonusQuestionBTN').removeClass('d-none');
        $('#showCorrectBonus').removeClass('d-none');
    }

    $('#proceed_game').click(function() {
        $('#form_game').addClass('d-none');
        $('#page1').removeClass('d-none');
        $('.background').css('background-image', 'url(assets/img/page1_bg.png)');
    })
})