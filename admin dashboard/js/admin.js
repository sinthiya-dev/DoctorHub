(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    
    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


       // Calender
       $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });

     // Chart Global Color
     Chart.defaults.color = "#6C7293";
     Chart.defaults.borderColor = "#d1d1d1";


     // Doughnut Chart
     var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
     var myChart6 = new Chart(ctx6, {
         type: "doughnut",
         data: {
             labels: ["Medicine", "ENT", "General"],
             datasets: [{
                 backgroundColor: [
                     'rgb(255, 99, 132)',
                     'rgb(54, 162, 235)',
                     'rgb(255, 205, 86)'
                     
                 ],
                 data: [80, 30, 74,]
             }]
         },
         options: {
             responsive: true
         }
     });

    //  multiple chart
     var ctx2 = $("#salse-revenue").get(0).getContext("2d");
     var myChart2 = new Chart(ctx2, {
         type: "line",
         data: {
             labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
             datasets: [{
                     label: "Earning",
                     data: [15, 30, 55, 45, 70, 65, 85 ,15, 30, 55, 45, 70],
                     backgroundColor: "rgba(235, 22, 22, .7)",
                     fill: true
                 },
                 {
                     label: "Patients",
                     data: [99, 135, 170, 130, 190, 180, 270 ,99, 135, 170, 130, 190,],
                     backgroundColor: "rgba(235, 22, 22, .5)",
                     fill: true
                 }
             ]
             },
         options: {
             responsive: true
         }
     });
        // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [22, 49, 22, 30, 42,55,35]
            }]
        },
        options: {
            responsive: true
        }
    });

     

})(jQuery);