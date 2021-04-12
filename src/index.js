'use strict'

import './style.css'

window.addEventListener('DOMContentLoaded', () => {

    const imageViewerItems = document.querySelectorAll('.image-viewer-item')

    if (!imageViewerItems) return

    document.body.insertAdjacentHTML('beforeend', `
        <div class="image-viewer">
            <img src="#" alt="">
            <button class="image-viewer-close">&times;</button>
        </div>
    `)

    const imageViewerZoom = document.querySelector('.image-viewer')

    let imageViewerParams = { src: [], current: -1 }

    const imageViewerChange = () => {
        imageViewerZoom.querySelector('img').src = imageViewerParams.src[imageViewerParams.current]
    }

    const imageViewerShow = index => {
        imageViewerParams.current = !isNaN(index) ? index : 0
        imageViewerChange()
        imageViewerZoom.classList.add('image-viewer-show')
    }

    const imageViewerClose = () => {
        imageViewerZoom.classList.remove('image-viewer-show')
    }

    const imageViewerPrev = () => {
        if (imageViewerParams.current <= 0) return
        imageViewerParams.current--
        imageViewerChange()
    }

    const imageViewerNext = () => {
        if (imageViewerParams.current >= (imageViewerParams.src.length - 1)) return
        imageViewerParams.current++
        imageViewerChange()
    }

    for (let i = 0; i < imageViewerItems.length; i++) {
        imageViewerParams.src.push(imageViewerItems[i].querySelector('img').src)
        imageViewerItems[i].addEventListener('click', () => imageViewerShow(i))
    }

    document.querySelector('.image-viewer-close').addEventListener('click', () => imageViewerClose())

    if (imageViewerItems.length > 1) {

        imageViewerZoom.insertAdjacentHTML('beforeend', `
            <button class="image-viewer-prev">&#10094;</button>
            <button class="image-viewer-next">&#10095;</button>
        `)

        document.querySelector('.image-viewer-prev').addEventListener('click', () => imageViewerPrev())

        document.querySelector('.image-viewer-next').addEventListener('click', () => imageViewerNext())
    }
})