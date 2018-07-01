class timepicker {
    constructor(hour, minute) {
        this.hour = "12"
        this.minute = "00"
        this.time_of_day = "AM"
    }
}

timepicker.prototype.buildModal = function() {
    console.log('this innside buildModal', this)
    let prevModal = document.getElementById("modal")
    if (prevModal) {
        prevModal.remove()
    }
    let min_clock_circle;
    let hour_clock_circle;
    const modal = document.createElement('div')
    modal.setAttribute("id", "modal")
    const container = document.createElement('div')
    container.classList.add("container")
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
    modal.appendChild(container)
    document.getElementById("main-div").appendChild(modal)

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
    hour.textContent = this.hour
    minute.textContent = this.minute
    header.appendChild(hour)
    header.appendChild(colon)
    header.appendChild(minute)
    header.appendChild(aft)
    header.appendChild(morn)

    const make_min_clock = () => {
        hour_clock_circle.remove()
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

        console.log('this.minute issssss', this.minute)
        let curr_min;
        if (this.minute === "00") {
            curr_min = document.getElementById('min_clock_number_60')
        } else if (this.minute >= 1 && this.minute < 10) {
            curr_min = document.getElementById('min_clock_number_' + this.minute[1])
        } else {
            curr_min = document.getElementById(`min_clock_number_${this.minute}`)
        }
        curr_min.classList.add("min_clock_number_clicked")
        console.log('curr_min is ', curr_min)

        const min_clock_pivot = document.createElement('div')
        min_clock_pivot.classList.add("pivot")
        min_clock_circle.appendChild(min_clock_pivot)

        let min_all_clock_numbers = Array.from(document.getElementsByClassName("min_clock_number"))

        min_all_clock_numbers.forEach((number) => {
            number.addEventListener("click", () => {
                let min_clicked_number = Array.from(document.getElementsByClassName("min_clock_number_clicked"))
                if (min_clicked_number.length === 0) {
                    number.classList.add("min_clock_number_clicked")
                } else {
                    for (let i = 0; i < min_clicked_number.length; i++) {
                        min_clicked_number[i].classList.remove("min_clock_number_clicked")
                    }
                    number.classList.add("min_clock_number_clicked")
                }
                if (isNaN(number.id[number.id.length - 2])) {
                    this.minute = "" + 0 + number.id[number.id.length - 1]
                } else {
                    if (number.id === 'min_clock_number_60'){
                        this.minute = "00"
                    } else {
                        this.minute = "" + number.id[number.id.length - 2] + number.id[number.id.length - 1]
                    }
                }
                minute.textContent = this.minute
            })
        })
    }

    // FUNCTION TO MAKE HOUR CLOCK
    const make_hour_clock = () => {
        if (min_clock_circle) {
            min_clock_circle.remove()
        }
        hour_clock_circle = document.createElement('div')
        hour_clock_circle.setAttribute("id", "hour_clock_circle")
        m_body.appendChild(hour_clock_circle);

        for (let i = 1; i < 13; i++) {
            let hour_clock_number = document.createElement('div')
            hour_clock_number.classList.add("hour_clock_number")
            hour_clock_number.setAttribute("id", `hour_clock_number_${i}`)
            hour_clock_number.textContent = i;
            hour_clock_circle.append(hour_clock_number)
        }


        let curr_hour = document.getElementById(`hour_clock_number_${this.hour}`)
        curr_hour.classList.add("hour_clock_number_clicked")
        console.log('curr_hour is ', curr_hour)
        // console.log('curr_hour is ', curr_hour)

        // make pivot
        // const hour_clock_pivot = document.createElement('div')
        // hour_clock_pivot.classList.add("pivot")
        // hour_clock_circle.appendChild(hour_clock_pivot)


        // add style to clicked number and update hour to clicked number
        let hour_all_clock_numbers = Array.from(document.getElementsByClassName("hour_clock_number"))
        // for each number, add a click handler to change the background color
        // also change hour.text content based on what is clicked
        hour_all_clock_numbers.forEach((number) => {
            number.addEventListener("click", () => {
                let hour_clicked_number = Array.from(document.getElementsByClassName("hour_clock_number_clicked"))
                if (hour_clicked_number.length === 0) {
                    number.classList.add("hour_clock_number_clicked")
                } else {
                    for (let i = 0; i < hour_clicked_number.length; i++) {
                        hour_clicked_number[i].classList.remove("hour_clock_number_clicked")
                    }
                    number.classList.add("hour_clock_number_clicked")

                }
                if (isNaN(number.id[number.id.length - 2])) {
                    this.hour = "" + number.id[number.id.length - 1]
                    console.log('this in here is ', this)
                } else {
                    this.hour = "" + number.id[number.id.length - 2] + number.id[number.id.length - 1]
                    console.log('this out there is ', this)
                }
                hour.textContent = this.hour
            })
        })
        console.log('this outer outer', this)
    }


    minute.addEventListener("click", () => make_min_clock())
    hour.addEventListener("click", () => make_hour_clock())


    make_hour_clock()


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
