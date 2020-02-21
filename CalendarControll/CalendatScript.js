function loadFunction(){
    var selectedDate;

var currentDate = new Date();


var months = ['January', 
              'February',
              'March',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December'];

var days = ['Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'];


    function loadmonthView(){
        
    }
    
    function loadweekView(){
}

    function fillDays(){

        var dateStart = new Date();

        var firstDay = 1;
        var lastDay;
        

        var m = months[dateStart.getMonth()];
        var indexOfM = months.indexOf(m);

        //window.location.reload();

        var bigMonthCheck = (indexOfM == 0) ||
                            (indexOfM == 2) ||
                            (indexOfM == 4) ||
                            (indexOfM == 6) ||
                            (indexOfM == 7) ||
                            (indexOfM == 9) ||
                            (indexOfM == 11);

        //window.location.reload();
        
        var smallMonthCheck = (indexOfM == 3) ||
                              (indexOfM == 5) ||
                              (indexOfM == 8) ||
                              (indexOfM == 10);

        //location.reload();

        var isFebruary = (indexOfM == 1);

        

        if(bigMonthCheck)
        {
            for(var i = 1; i  <= 31; i++)
            {
                var tdTag = document.getElementById(i.toString());
                var content = document.createTextNode(i.toString());

                tdTag.append(content);

            }
        }
        
        if(smallMonthCheck)
        {
            for(var i = 1; i <= 30; i++)
            {
                var tdTag = document.getElementById(i.toString());
                var content = document.createTextNode(i.toString());

                tdTag.append(content);
            }
        }

        if(isFebruary)
        {
            for(var i = 1; i <= 28; i++)
            {
                var tdTag = document.getElementById(i.toString());
                var content = document.createTextNode(i.toString());

                tdTag.append(content);
            }
        }

    };


    var functionCall = fillDays();
    
}



    

