// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

function onReady (yourMethod) {
  var readyStateCheckInterval = setInterval(function () {
    if (document && document.readyState === 'complete') { // Or 'interactive'
      clearInterval(readyStateCheckInterval)
      var keepExpandingSeeMoreInterval = setInterval(() => {
        yourMethod()
      }, 1000)
    }
  }, 10)
}

onReady(function () {
  const nodeArray = document.querySelectorAll('.ts-see-more-fold')
  for (let index = 0; index < nodeArray.length; index++) {
    const element = nodeArray[index]
    fireClick(element)
  }
  console.log(`>>>> Expanding ${nodeArray.length} messages via virtual "See More" clicks in MS Teams. 📖📖📖`)
  if(nodeArray.length === 0) console.log(`>>>> All "See More" messages have been expanded in MS Teams, hooray! 🎉🎉🎉`)
})

function fireClick (node) {
  if (document.createEvent) {
    var evt = document.createEvent('MouseEvents')
    evt.initEvent('click', true, false)
    node.dispatchEvent(evt)
  } else if (document.createEventObject) {
    node.fireEvent('onclick')
  } else if (typeof node.onclick === 'function') {
    node.onclick()
  }
}
