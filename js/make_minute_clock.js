const make_min_clock = function() {
    const min_clock_circle = document.createElement('div')
    min_clock_circle.setAttribute("id", "min_clock_circle")
    m_body.appendChild(min_clock_circle)

    for (let i = 1; i < 61; i++) {
        let min_clock_number = document.createElement('div')
        min_clock_number.classList.add("min_clock_number")
        min_clock_number.setAttribute("id", `min_clock_number_${i}`)
        if (i % 5 === 0) {
            min_clock_number.textContent = i
        }
        if (i === 60){
            min_clock_number.textContent = "00"
        }
        min_clock_circle = append(min_clock_number)
    }
}
