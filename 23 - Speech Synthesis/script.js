const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

const synth = window.speechSynthesis
console.log(synth, msg)

function voicesList() {
    voices = synth.getVoices()
    console.log(voices)

    for (let i = 0; i < voices.length; i++) {
        var option = document.createElement('option')
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')'

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang)
        option.setAttribute('data-name', voices[i].name)
        voicesDropdown.appendChild(option)
    }
}

msg.text = 'Hello! I love JavaScript 👍'
function paramChange() {
    msg[this.name] = this.value
    console.log(this.name, this.value, msg)
}

function speak() {
    synth.speak(msg)
    console.log(voicesDropdown.value)
}

function stopSpeak() {
    synth.cancel();
}

synth.addEventListener('voiceschanged', voicesList)
options.forEach(option => option.addEventListener('change', paramChange))
speakButton.addEventListener('click', speak)
stopButton.addEventListener('click', stopSpeak)


