$(document).ready(function(){
    
    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().fadeIn(function(){
            $(this).addClass("sactive");
        });  
    });
    
    $(".main").mouseleave(function(){
        $(this).children(".sub").removeClass("sactive");
        $(this).children(".sub").stop().fadeOut();
    });
    
    // scrchk이라는 일은 다음과 같다.
        // 스크롤을 얼마나 했는가? 그것을 scr이라고 하자.
        // 만약 scr값이 0보다 큰가?
            // header의 top 값이 -56px이 되도록 애니메이트
        // 그렇지 않은가?
            // header의 top 값이 0이 되도록 애니메이트
    function scrchk(){
        var scr = $(window).scrollTop();
        if(scr > 0){
            $("header").css({top:"-56px"});
        }else{
            $("header").css({top:"0px"});
        }
    }
    
    // scrchk을 실행한다.
    // 브라우저에서 스크롤할때마다 다음과같은 일을 벌인다.
        // scrchk을 실행한다.
    scrchk();
    $(window).scroll(function(){ scrchk(); });
    
    
    // ****** 박스 내부의 input 값에 따른 toggle 버튼 ******
    // .bajibox를 클릭했을때 이러한일들이벌어질것이다.
        // 방금클릭한그것 안에들어있는(자식) input의 값이 얼마인가?
        // 그것을 stat이라고 하자.
        // 만약 stat이 0이라면 (선택되지 않은상태)
            // 방금클릭한그것 안에들어있는 .baji에게 bajiActive라는 클래스를 준다.
            // 방금클릭한그것 안에들어있는 input의 값으로 1을 넣어준다.
        // 그것이 아니라면 (stat이 1이라면 ; 선택된 상태)
            // 방금클릭한그것 안에들어있는 .baji에게 bajiActive라는 클래스를 뺏는다.
            // 방금클릭한그것 안에들어있는 input의 값으로 0을 넣어준다.
    $(".bajibox").click(function(){
        var stat = $(this).children("input").val();
        if(stat == "0"){
            $(this).children(".baji").addClass("bajiActive");
            $(this).children("input").val("1");
        }else{
            $(this).children(".baji").removeClass("bajiActive");
            $(this).children("input").val("0");
        }
    });
    
    // #loginSubmit을 눌렀을때 다음과같은일을한다.
        // #userid의 값의 글자수를 a라고 하자.
        // #userpw의 값의 글자수를 b라고 하자.
        // 만약 a*b의 결과가 0인가?
            // 그렇다면
                // 경고창 띄우기 "아이디와 비밀번호를 입력하세요."
            // 그렇지 않다면
                // #loginForm을 전송하기
    $("#loginSubmit").click(function(){
        var a = $("#userid").val().length;
        var b = $("#userpw").val().length;
        if(a*b == 0){
            alert("아이디와 비밀번호를 입력하세요.");
        }else{
            $("#loginForm").submit();
        }
    });

    //findIdSubmit을 눌렀을때 
    //1.성명을 입력하지 않았다면 "성명을 입력해 주세요"라는 alert를 띄우기
    //1.1 성명 입력 칸에 포커스를 위치 시키기
    //2.휴대폰을 입력하지 않았다면 "폰번호를 입력해 주세요"라는 alert를 띄우기
    //2.휴대폰번호 입력 칸에 포커를 위치 시키기.
    //3.모두 입력했다면 findIdForm을 submit시키기.

    $("#findIdSubmit").click(function(){
        var namelen = $(".idModal #username").val().length;
        var phonelen = $(".idModal #phone").val().length;
        if(namelen == 0){
            alert("성명을 입력하세요.");
            $(".idModal #username").focus();
        }if(phonelen == 0){
            alert("폰번호를 입력하세요");
            $(".idModal #phone").focus();
        }if(namelen != 0 && phonelen !=0) {
            $("#findIdForm").submit();
        }
    });

    $("#findIdPwbmit").click(function(){
        var idlen =  $(".pwModal #username").val().length;
        var namelen = $(".pwModal #username").val().length;
        var phonelen = $(".pwModal #phone").val().length;
        if(namelen == 0){
            alert("성명을 입력하세요.");
            $(".pwModal #username").focus();
        }else if(idlen == 0){
            alert("아이디 입력하세요.");
            $(".pwModal #userid").focus();
        }else if(phonelen == 0){
            alert("폰번호를 입력하세요");
            $(".pwModal #phone").focus();
        }if(namelen != 0 && phonelen !=0) {
            $(".pwModal #findIdForm").submit();
        }
    });


    
    $(".toLoginModal").click(function(){
        $(".modal").hide();
        $(".loginModal").show();
    });
    $(".toIdModal").click(function(){
        $(".modal").hide();
        $(".idModal").show();
    });
    $(".toPwModal").click(function(){
        $(".modal").hide();
        $(".pwModal").show();
    });
    $(".modalClose").click(function(){
        $(".modal").hide();
    });
    
    
    
    
});


























































