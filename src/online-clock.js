        const worldTimeZones = 'http://worldtimeapi.org/api/timezone/'
        var selectedTime = 'http://worldtimeapi.org/api/timezone/' + inputValue

        var input = document.getElementById("search-timezones")
        var inputValue = input.value

        var timeZones
        var i

        var request = new XMLHttpRequest()
        request.open('GET', worldTimeZones, true)

        request.onload = function () {
            //Begin accessing JSON data here
            timeZones = JSON.parse(this.response)
            return 
        }
        //Send Request
        request.send()

        console.log(timeZones)
        console.log(selectedTime)

        function getTimeZones () {

            for (i = 0; i < timeZones.length; i++) {
                if (timeZones[i] == inputValue) {
                    console.log(timeZones)
                    return
                }
            }
        }
        