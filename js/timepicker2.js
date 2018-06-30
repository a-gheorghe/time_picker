class timepicker {
    constructor(hour, minute) {
        this.hour = hour
        this.minute = minute
        this.which_clock = "hourly_clock"
    }
}

timepicker.prototype.buildModal = function() {
    let min_clock_circle;
    let hour_clock_circle;
    // make the outline and the options ok/cancel text
    const container = document.createElement('div')
    container.classList.add("container")
    // container.setAttribute("id", "modal-content")
    const header = document.createElement('div')
    header.classList.add("header")
    container.appendChild(header)
    const m_body = document.createElement('div')
    m_body.classList.add("m_body")
    container.appendChild(m_body)
    const options = document.createElement('div')
    options.classList.add("option_box")
    container.appendChild(options)
    const ok_text = document.createElement('span')
    ok_text.classList.add('ok_text')
    const cancel_text = document.createElement('span')
    cancel_text.classList.add('cancel_text')
    ok_text.innerText = "OK"
    cancel_text.innerText = "CANCEL"
    options.appendChild(ok_text)
    options.appendChild(cancel_text)
    document.getElementById("main-div").appendChild(container)

    // make the time info and append to header
    const hour = document.createElement('span')
    const colon = document.createElement('span')
    const minute = document.createElement('span')
    const aft = document.createElement('div')
    const morn = document.createElement('div')
    hour.setAttribute("id", "hour")
    colon.setAttribute("id", "colon")
    minute.setAttribute("id", "minute")
    morn.setAttribute("id", "morn_text")
    aft.setAttribute("id", "aft_text")
    colon.textContent = ":"
    aft.textContent = "PM"
    morn.textContent = "AM"
    hour.textContent = "12"
    minute.textContent = "00"
    header.appendChild(hour)
    header.appendChild(colon)
    header.appendChild(minute)
    header.appendChild(aft)
    header.appendChild(morn)

    const make_min_clock = function() {
        hour_clock_circle.style.display = 'none'
        min_clock_circle = document.createElement('div')
        min_clock_circle.setAttribute("id", "min_clock_circle")
        m_body.appendChild(min_clock_circle)

        for (let i = 1; i < 61; i++) {
            let min_clock_number = document.createElement('div')
            min_clock_number.classList.add("min_clock_number")
            min_clock_number.setAttribute("id", `min_clock_number_${i}`)
            if (i % 5 === 0) {
                min_clock_number.textContent = i
            }
            if (i === 60) {
                min_clock_number.textContent = "00"
            }
            min_clock_circle.appendChild(min_clock_number)
        }
    }

    // FUNCTION TO MAKE HOUR CLOCK
    const make_hour_clock = function() {
        if (min_clock_circle) {
            min_clock_circle.style.display = 'none'

        }
        hour_clock_circle = document.createElement('div')
        hour_clock_circle.setAttribute("id", "hour_clock_circle")
        m_body.appendChild(hour_clock_circle);

        for (let i = 1; i < 13; i++) {
            let hour_clock_number = document.createElement('div')
            hour_clock_number.classList.add("hour_clock_number")
            hour_clock_number.setAttribute("id", `hour_clock_number_${i}`)
            hour_clock_number.textContent = i;
            if (i === 12) {
                hour_clock_number.classList.add("hour_clock_number_clicked")
            }
            hour_clock_circle.append(hour_clock_number)
        }

        // make pivot
        const hour_clock_pivot = document.createElement('div')
        hour_clock_pivot.classList.add("pivot")
        hour_clock_circle.appendChild(hour_clock_pivot)


        // add style to clicked number and update hour to clicked number
        let hour_all_clock_numbers = Array.from(document.getElementsByClassName("hour_clock_number"))
        // for each number, add a click handler to change the background color
        // also change hour.text content based on what is clicked
        hour_all_clock_numbers.forEach(function(number){
            number.addEventListener("click", function(){
                let hour_clicked_number = Array.from(document.getElementsByClassName("hour_clock_number_clicked"))
                if (hour_clicked_number.length === 0) {
                    console.log('none are clicked', hour_clicked_number)
                    number.classList.add("hour_clock_number_clicked")
                } else {
                    console.log('1+ is clicked', hour_clicked_number)
                    hour_clicked_number[0].classList.remove("hour_clock_number_clicked")
                    number.classList.add("hour_clock_number_clicked")
                }
                if (isNaN(number.id[number.id.length - 2])) {
                    this.hour = parseInt(number.id[number.id.length - 1])
                } else {
                    this.hour = parseInt("" + number.id[number.id.length - 2] + number.id[number.id.length - 1])
                }
                hour.textContent = this.hour
            })
        })
    }


    minute.addEventListener("click", make_min_clock)
    hour.addEventListener("click", make_hour_clock)


    console.log('before calling make hour clock')
    make_hour_clock()
    console.log('after calling make hour clock')


}


let picker1 = new timepicker()
let picker2 = new timepicker()
let picker3 = new timepicker()

let clock_icon1 = document.getElementById("clock_icon1")
clock_icon1.addEventListener("click", () => picker1.buildModal())

let clock_icon2 = document.getElementById("clock_icon2")
clock_icon2.addEventListener("click", () => picker2.buildModal())

let clock_icon3 = document.getElementById("clock_icon3")
clock_icon3.addEventListener("click", () => picker3.buildModal())
