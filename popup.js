
        var button1 = document.getElementById("20");
        var button2 = document.getElementById("30");
        var button3 = document.getElementById("40");
        var timer = document.getElementById("timer");

        function time_remaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor( (t/1000) % 60 );
            var minutes = Math.floor( (t/1000/60) % 60 );
            var hours = Math.floor( (t/(1000*60*60)) % 24 );
            var days = Math.floor( t/(1000*60*60*24) );
            return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
        }
        function run_clock(id,endtime) {
            var clock = document.getElementById(id);
            function update_clock(){
                var t = time_remaining(endtime);
                clock.innerHTML = ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2) + ' left until it\'s time to take a break!';
                if(t.total<=0) {
                    clearInterval(timeinterval);
                    // Delete all the cookies
                    document.cookie = "button1= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "myClock1= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "button2= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "myClock2= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "button3= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    document.cookie = "myClock3= ; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                    button1.disabled = false;
                    button2.disabled = false;
                    button3.disabled = false;
                    clock.innerHTML = "BREAK TIME!!!";
                }
            }
            update_clock(); // run function once at first to avoid delay
            var timeinterval = setInterval(update_clock,1000);
        }

        // Check if the first button has been pressed already
        if(document.cookie && document.cookie.match('button1')) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            var deadline = document.cookie.match(/(^|;)myClock1=([^;]+)/)[2];
            run_clock('timer',deadline);

        } else {
            button1.addEventListener("click", function() {
                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                if (document.cookie && document.cookie.match('myClock1')) {
                    var deadline = document.cookie.match(/(^|;)myClock1=([^;]+)/)[2];
                } else {
                    var timeLeft = 20;
                    var currentTime = Date.parse(new Date());
                    var deadline = new Date(currentTime + timeLeft*60*1000);
                    document.cookie = 'myClock1=' + deadline + ';';
                }
                document.cookie = "button1=true;";
                run_clock('timer', deadline);
            });
        }

        // Check if the second button has been pressed already
        if(document.cookie && document.cookie.match('button2')) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            var deadline = document.cookie.match(/(^|;)myClock2=([^;]+)/)[2];
            run_clock('timer',deadline);

        } else {
            button2.addEventListener("click", function() {
                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                if (document.cookie && document.cookie.match('myClock2')) {
                    var deadline = document.cookie.match(/(^|;)myClock2=([^;]+)/)[2];
                } else {
                    var timeLeft = 30;
                    var currentTime = Date.parse(new Date());
                    var deadline = new Date(currentTime + timeLeft*60*1000);
                    document.cookie = 'myClock2=' + deadline + ';';
                }
                document.cookie = "button2=true;";
                run_clock('timer', deadline);
            });

        }

        // Check if the third button has been pressed already
        if(document.cookie && document.cookie.match('button3')) {
            button1.disabled = true;
            button2.disabled = true;
            button3.disabled = true;
            var deadline = document.cookie.match(/(^|;)myClock3=([^;]+)/)[2];
            run_clock('timer',deadline);

        } else {
            button3.addEventListener("click", function() {
                button1.disabled = true;
                button2.disabled = true;
                button3.disabled = true;
                if (document.cookie && document.cookie.match('myClock3')) {
                    var deadline = document.cookie.match(/(^|;)myClock3=([^;]+)/)[2];
                } else {
                    var timeLeft = 40;
                    var currentTime = Date.parse(new Date());
                    var deadline = new Date(currentTime + timeLeft*60*1000);
                    document.cookie = 'myClock3=' + deadline + ';';
                }
                document.cookie = "button3=true;";
                run_clock('timer', deadline);
            });
        }


