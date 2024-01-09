(function () {
    var myPlugin = function (hook, vm) {
      hook.ready(function() {
        applyColors();
        changeLangText();
          alert(document.getElementsByClassName("version-selector")[0])
      })
    };

    function applyColors() {
      var array = document.getElementsByTagName("span");
      for(var i = 0; i < array.length; i++) {
        var element = array[i];
        if(element.innerText == "using")
          element.style.color = "#C586C0";
      }
    }

    function changeLangText() {
      var array = document.getElementsByTagName("pre");
      for(var i = 0; i < array.length; i++)
        array[i].setAttribute("data-lang", "c#");
    }
    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], myPlugin);
  })();
