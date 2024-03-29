import {Even} from './even.js'

import '../css/style.scss'

$(document).ready(function () {
  Even.backToTop()
  Even.mobileNavbar()
  Even.toc()
  Even.lightGallery()
})

Even.flowchart()
Even.sequence()
hljs.initHighlighting()
Even.highlight()

