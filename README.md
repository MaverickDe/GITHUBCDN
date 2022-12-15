## Description
```bash

GITHUB CDN
```


```bash
This projects helps to incoperate github as a CDN

You can also use Jsdelivr but using jsdelivr, you file gotten from the cdn is not always updated when you update your corresponding github repo

```


## How to use
```
1. Create a script tag at the begin of your document 
        <script>
        
        </script>

2. In that script tag define a variable called github to a list
        <script>
        let githubcdn = []
        
        </script>
3. In that list enumerate all the github repo files you would love to import . using the format below
                _MaverickDe/acetoolscms/main/kwikertools.js
                [github user name]/[github repo name]/[branch]/[path to file]
                 
                real example will be:
                [MaverickDe]/[acetoolscms]/[main]/[kwikertools.js]
            ==>>MaverickDe/acetoolscms/main/kwikertools.js


              <script>
                let githubcdn = [MaverickDe/acetoolscms/main/kwikertools.js]
        
              </script>
4. create a new script tag also where you would love to import your repo and assign it  an id using the forma below

            <script id="githubcdn_[github user name]/[github repo name]/[branch]/[path to file]"></script>

            real example below
            <script id="githubcdn__MaverickDe/acetoolscms/main/kwikertools.js"></script>

5. Assign a src attribute to the srcipt tag with a src attribute using the url below

            


```



## Note
Using this method your CDN file is always goung to update when you update your corresponding repo files
```

## Developer
```bash
ASOTIBE PRINCEWILL ONYEMAECHI
princewillasotibe123@gmail.com
```


