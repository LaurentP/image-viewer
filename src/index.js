'use strict'

import './style.css'

window.addEventListener('DOMContentLoaded', () => {

    const imageViewerItems = document.querySelectorAll('.image-viewer-item')

    if (!imageViewerItems) return

    document.body.insertAdjacentHTML('beforeend', `
        <div class="image-viewer">
            <button class="image-viewer-close">&times;</button>
        </div>
    `)

    const imageViewerZoom = document.querySelector('.image-viewer')

    let imageViewerParams = { src: [], current: -1 }

    const imageViewerChange = () => {

        if (imageViewerZoom.querySelector('img')) {
            imageViewerZoom.removeChild(imageViewerZoom.querySelector('img'))
        }

        const loader = document.createElement('div')
        loader.classList.add('image-viewer-loader')

        imageViewerZoom.appendChild(loader)

        const imageViewerPrevBtn = document.querySelector('.image-viewer-prev')
        const imageViewerNextBtn = document.querySelector('.image-viewer-next')

        if (imageViewerPrevBtn) {
            if (imageViewerParams.current === 0) {
                imageViewerPrevBtn.setAttribute('style', 'display: none')
            }
            else {
                imageViewerPrevBtn.setAttribute('style', 'display: block')
            }
        }

        if (imageViewerNextBtn) {
            if (imageViewerParams.current === (imageViewerItems.length - 1)) {
                imageViewerNextBtn.setAttribute('style', 'display: none')
            }
            else {
                imageViewerNextBtn.setAttribute('style', 'display: block')
            }
        }

        const img = new Image()

        img.addEventListener('load', () => {
            imageViewerZoom.removeChild(loader)
            imageViewerZoom.appendChild(img)
        })

        img.src = imageViewerParams.src[imageViewerParams.current]
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

        const loader = document.createElement('div')
        loader.classList.add('image-viewer-loader')

        imageViewerItems[i].appendChild(loader)

        const img = new Image()

        img.addEventListener('load', () => {
            imageViewerItems[i].removeChild(loader)
            imageViewerItems[i].appendChild(img)
        })

        img.src = imageViewerItems[i].dataset.src
        img.alt = imageViewerItems[i].dataset.alt

        imageViewerParams.src.push(imageViewerItems[i].dataset.src)

        img.addEventListener('click', () => imageViewerShow(i))
    }

    imageViewerZoom.addEventListener('click', e => {
        if (e.target === imageViewerZoom) imageViewerClose()
    })

    document.querySelector('.image-viewer-close').addEventListener('click', () => imageViewerClose())

    if (imageViewerItems.length > 1) {

        imageViewerZoom.insertAdjacentHTML('beforeend', `
            <button class="image-viewer-prev">&#10094;</button>
            <button class="image-viewer-next">&#10095;</button>
        `)

        document.querySelector('.image-viewer-prev').addEventListener('click', () => imageViewerPrev())

        document.querySelector('.image-viewer-next').addEventListener('click', () => imageViewerNext())

        document.addEventListener('keydown', e => {
            if (/left/i.test(e.key)) {
                imageViewerPrev()
            }
            else if (/right/i.test(e.key)) {
                imageViewerNext()
            }
        })
    }
})