
(async () => {


        if (!githubcdn) {
          return;
    }
    
    githubcdn.forEach(async (e) => {
                    
        let val = e
        let scripttag = document.getElementById(`githubcdn_${val}`);
        console.log(scripttag)
                    if (scripttag) {
                        let parent = scripttag.parentElement
                        console.log(parent.childNodes);
                         let blob = await fetch(
      `https://raw.githubusercontent.com/${val}`
    );

    blob.text().then((e) => {
      let script_ = document.createElement("script");

      script_.innerHTML =
            e ;
        
        Array.from(scripttag.attributes).forEach(e => {
                
            console.log(e.name, e.value)
            
            if (e.name != "src") {
                
                script_.setAttribute(`${e.name}`, e.value);
            }

           
            
        })
        
        if (parent.hasChildNodes && parent.contains(scripttag)) {
            
            parent.insertBefore(script_, scripttag);
            parent.removeChild(scripttag)
        }

        if (githubcdn.includes(val)) {
            // console.log(githubcdn)
            githubcdn.splice(githubcdn.indexOf(val,1))
            // console.log(githubcdn)
        }
        
            
            

        // if()
    });




                  }
                });
      
// MaverickDe / acetoolscms / main / kwikertools.js;
   
  })();
;

// <script></script>


// IF you have any issue on using the file, refer to repo readme file
