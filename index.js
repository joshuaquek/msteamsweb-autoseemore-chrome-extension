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
  {
	  const nodeArray = document.querySelectorAll('.ts-see-more-fold')
	  for (let index = 0; index < nodeArray.length; index++) {
		const element = nodeArray[index]
		// This condition seems not to be necessary, it makes the code independent of the user language
		//if(element.outerHTML.includes("see more") || element.outerHTML.includes("See more"))
		{
			// don't activate on hidden "see more" elements
			// the correct one has '<button class="ts-sym ts-see-more-button ts-see-more-fold" ...'
			// the hidden one has '<button class="ts-sym ts-see-more-button hide ts-see-more-fold"  ...'
			if(!element.outerHTML.includes("hide"))
			{
				console.log("------- firing click on 'see more': -------");
				console.log(element.outerHTML);
				fireClick(element)
			}
		}
	  }
  }
  
  // do the same for the replies from
  {
	  const nodeArray = document.querySelectorAll('.ts-collapsed-common')
	  for (let index = 0; index < nodeArray.length; index++) {
		const element = nodeArray[index]
		if(element.outerHTML.includes("replies from") && element.outerHTML.includes("expand") )
		{
			// both, the one to collapse and the one to expand have <a class="ts-collapsed-string app-small-font ts-collapsed-common"
			// they only differ in the text (which might unfortunately by language sensitive)
			
			console.log("------- firing click on 'replies from': -------");
			console.log(element.outerHTML);
			fireClick(element)
		}
	  }
  }
  
  //ts-collapsed-string app-small-font ts-collapsed-common
  
  
  // console.log(`>>>> Expanding ${nodeArray.length} messages via virtual "See More" clicks in MS Teams. 📖📖📖`)
  // if (nodeArray.length === 0) console.log('>>>> All "See More" messages have been expanded in MS Teams, hooray! 🎉🎉🎉')
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
