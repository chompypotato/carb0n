function openCloaker() {
      try {
        var win = window.open('about:blank', '_blank');
        if (!win) {
          throw new Error("Popup blocked");
        }

        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = 'go/'; 

        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.body.appendChild(iframe);

        win.document.title = '\u200B'; // zero-width space
        var link = win.document.createElement('link');
        link.rel = 'icon';
        link.href = 'go/blank.ico';
        win.document.head.appendChild(link);

        window.location.replace("https://www.education.com/");
      } catch (e) {
        alert("Please allow popups and redirects for this site for the about:blank to open. (reload after)");
      }
    }

    
    window.onload = openCloaker;
