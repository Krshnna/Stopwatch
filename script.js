
const clock = document.querySelector(".clock")

let sec = 0, min = 0, hr = 0, intervalid;
const start = () => {
    intervalid = setInterval(()=> {
        sec += 1;
        if(sec > 59) {
            min += 1;
            sec = 0;
            if(min > 59) {
                hr += 1;
                min = 0;
                sec = 0;
                if(hr > 23) {
                    hr = 0;
                } 
            }
        }
        // console.log(`${String(hr).padStart(2, "0")}:${String(min).padStart(2,"0")}:${(String(sec).padStart(2, "0"))}`)
        const hour = String(hr).padStart(2, "0")
        const minutes = String(min).padStart(2,"0")
        const second = String(sec).padStart(2, "0")
        clock.innerHTML = `${hour}:${minutes}:${second}`
    }, 1000)
};

const stop = () => {
    clearInterval(intervalid)
};