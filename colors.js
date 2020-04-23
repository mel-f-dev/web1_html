var Links = {
    setColor: function(color) {
      var alist = document.querySelectorAll("a");
      i = 0;
      while (i < alist.length) {
        alist[i].style.color = color;
        i = i + 1;
      }
    }
  }
  
  var Body = {
    setColor: function (color) {
      document.querySelector("body").style.Color = color;
    },
    setBackgroundColor: function (color) {
      document.querySelector("body").style.backgroundColor = color;
    },
  }

  function darkmodeHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "dark") {
      Body.setBackgroundColor("black");
      Body.setColor("white");
      self.value = "bright";

      Links.setColor("powderblue");
    } else {
      Body.setBackgroundColor("white");
      Body.setColor("black");
      self.value = "dark";

      Links.setColor("blue");
    }
  }