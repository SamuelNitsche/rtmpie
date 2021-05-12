import Plyr from 'plyr'
import Hls from 'hls.js'
import { library, icon } from '@fortawesome/fontawesome-svg-core'

import '../css/tailwind.css'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay)

document.getElementById('buttonIcon').innerHTML = icon({
    prefix: 'fas',
    iconName: 'play',
}).html

document.getElementById('playButton').addEventListener('click', () => {
    document.getElementById('buttonWrapper').remove()

    const playerEl = document.createElement('video')
    playerEl.autoplay = true
    playerEl.controls = true
    playerEl.classList.add('w-screen')
    playerEl.classList.add('h-screen')
    document.getElementsByTagName('body')[0].appendChild(playerEl)

    const plyr = new Plyr(video, { controls: ['play-large', 'play', 'current-time', 'mute', 'volume', 'settings', 'pip', 'airplay', 'fullscreen'] });

    if (!Hls.isSupported()) {
        playerEl.src = stream_url;
    } else {
        const hls = new Hls();
        hls.loadSource(stream_url);
        hls.attachMedia(playerEl);
        window.hls = hls;
    }

    plyr.muted = true
    setTimeout(() => {
        plyr.play()
    }, 500)

    // if (FlvJs.isSupported()) {
    //     const playerEl = document.createElement('video')
    //     playerEl.autoplay = true
    //     playerEl.controls = true
    //     playerEl.classList.add('w-screen')
    //     playerEl.classList.add('h-screen')
    //     document.getElementsByTagName('body')[0].appendChild(playerEl)


    //     const player = FlvJs.createPlayer({
    //         type: 'flv',
    //         isLive: true,
    //         url: stream_url,
    //     })
    //     player.attachMediaElement(playerEl)
    //     player.load()
    //     player.play()
    //     setInterval(() => {
    //         player.play()
    //     }, 1000)
    // }
})
