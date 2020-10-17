(function Open_a_new_window() {
  var Open_a_new_window = document.getElementById("newWindow_button");

  Open_a_new_window.onclick = function () {
    chrome.windows.create({state : "maximized"});
  };
})();

(function Open_a_new_window_in_Incognito_mode() {
  var Open_a_new_window_in_Incognito_mode = document.getElementById("incognito_button");

  Open_a_new_window_in_Incognito_mode.onclick = function () {
    chrome.windows.create({incognito : true, state : "maximized"});
  };
})();

(function Open_a_new_tab_and_jump_to_it() {
  var Open_a_new_tab_and_jump_to_it = document.getElementById("newTab_button");

  Open_a_new_tab_and_jump_to_it.onclick = function () {
    chrome.tabs.create({active : true});
  };
})();

(function Reopen_previsouly_closed_tabs_in_the_order_they_were_closed() {
  var Reopen_previsouly_closed_tabs_in_the_order_they_were_closed = document.getElementById("reopen_button");
  
  Reopen_previsouly_closed_tabs_in_the_order_they_were_closed.onclick = function () {
    chrome.sessions.restore();
  };
})();

(function Jump_to_the_next_open_tab() {
  var Jump_to_the_next_open_tab =  document.getElementById("next_button");
  
  Jump_to_the_next_open_tab.onclick = function () {
    chrome.tabs.query({highlighted: true}, function (highlightedTabs) {
      chrome.tabs.query( {currentWindow: true}, function(tabs) {
        tabs.forEach(function (_t, i) {
          if (_t.id == highlightedTabs[0].id) { 
            //Actually, the number of "highlightedTabs" is one, 
            //but "chrome.tabs.query" returns the result as an 
            //array, so I coded like this.
            var newtab = tabs[i+1] || tabs[0];
            if (newtab) {
              chrome.tabs.highlight({tabs: newtab.index});
            }
          }
        });
      });
    });
  };
})();

(function Jump_to_the_previous_open_tab() {
  var Jump_to_the_next_previous_tab =  document.getElementById("previous_button");
  
  Jump_to_the_next_previous_tab.onclick = function () {
    chrome.tabs.query({highlighted: true}, function (highlightedTabs) {
      chrome.tabs.query({currentWindow: true}, function(tabs) {
        tabs.forEach(function (_t, i) {
          if (_t.id == highlightedTabs[0].id) {         
            var newtab = tabs[i-1] || tabs[Object.keys(tabs).length-1];
            if (newtab) {
              chrome.tabs.highlight({tabs: newtab.index});
            }
          }
        });
      });
    });
  };
})();


$(document).ready(function(){
  $("#specific_button").click(function(){
    $(".btnGroup").toggle();
  });
});

(function Jump_to_a_specific_tab() {
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  var button5 = document.getElementById("button5");
  var button6 = document.getElementById("button6");
  var button7 = document.getElementById("button7");
  var button8 = document.getElementById("button8");

  chrome.tabs.query({currentWindow: true}, function(tabs) {
    button1.onclick = function () {      
      if (tabs[0]) chrome.tabs.highlight({tabs: tabs[0].index});
    };
    button2.onclick = function () {      
      if (tabs[1]) chrome.tabs.highlight({tabs: tabs[1].index});
    };
    button3.onclick = function () {      
      if (tabs[2]) chrome.tabs.highlight({tabs: tabs[2].index});
    };
    button4.onclick = function () {      
      if (tabs[3]) chrome.tabs.highlight({tabs: tabs[3].index});
    };
    button5.onclick = function () {      
      if (tabs[4]) chrome.tabs.highlight({tabs: tabs[4].index});
    };
    button6.onclick = function () {      
      if (tabs[5]) chrome.tabs.highlight({tabs: tabs[5].index});
    };
    button7.onclick = function () {      
      if (tabs[6]) chrome.tabs.highlight({tabs: tabs[6].index});
    };
    button8.onclick = function () {      
      if (tabs[7]) chrome.tabs.highlight({tabs: tabs[7].index});
    };
  });
})();

(function Jump_to_the_rightmost_tab() {
  var Jump_to_the_rightmost_tab = document.getElementById("rightmost_button");

  Jump_to_the_rightmost_tab.onclick =  function () {
    chrome.tabs.query({currentWindow: true}, function (tabs) {
      var rightmostTab = tabs[Object.keys(tabs).length-1];
      if (rightmostTab) chrome.tabs.highlight({tabs: rightmostTab.index});
    });
  };
})();

(function Open_your_home_page_in_the_current_tab() {
  var Open_your_home_page_in_the_current_tab = document.getElementById("home_button");
  
  Open_your_home_page_in_the_current_tab.onclick = function () {
    chrome.tabs.update({url : "chrome://newtab/"});    
  };
})();

(function Open_the_next_page_from_your_browsing_history_in_the_current_tab() {
  var Open_the_next_page_from_your_browsing_history_in_the_current_tab = document.getElementById("nextHistory_button");
  Open_the_next_page_from_your_browsing_history_in_the_current_tab.onclick = function () {
    chrome.tabs.goForward();
  };
})();

(function Open_the_previous_page_from_your_browsing_history_in_the_current_tab() {
  var Open_the_previous_page_from_your_browsing_history_in_the_current_tab = document.getElementById("previousHistory_button");
  Open_the_previous_page_from_your_browsing_history_in_the_current_tab.onclick = function () {
    chrome.tabs.goBack();
  };
})();

(function Close_the_current_tab() {
  var Close_the_current_tab = document.getElementById("closeTab_button");
  
  Close_the_current_tab.onclick = function () {
    chrome.tabs.query({highlighted: true}, function (highlightedTabs) {
      chrome.tabs.remove(highlightedTabs[0].id);
    });
  };
})();

(function Close_the_current_window() {
  var Close_the_current_window = document.getElementById("closeWindow_button");

  Close_the_current_window.onclick = function () {
    chrome.windows.getCurrent(function (targetWindow) {
      chrome.windows.remove(targetWindow.id);
    });
  };
})();

(function Minimize_the_current_window() {
  var Minimize_the_current_window = document.getElementById("minimize_button");

  Minimize_the_current_window.onclick = function() {
    chrome.windows.getCurrent(function (targetWindow) {
      chrome.windows.update(targetWindow.id, {state: "minimized"});
    });
  };
})();

(function Maximize_the_current_window() {
  var Maximize_the_current_window = document.getElementById("maximize_button");

  Maximize_the_current_window.onclick = function() {
    chrome.windows.getCurrent(function (targetWindow) {
      chrome.windows.update(targetWindow.id, {state: "maximized"});
    });
  };
})();


(function Quit_Google_Chrome() {
  var Quit_Google_Chrome = document.getElementById("quit_button");

  Quit_Google_Chrome.onclick = function () {
    chrome.windows.getAll(function (targetWindows) {
      targetWindows.forEach(function (_t) {
        chrome.windows.remove(_t.id);
      });
    });
  };
})();