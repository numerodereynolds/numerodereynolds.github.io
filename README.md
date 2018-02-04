# numerodereynolds
### personal blog

In this file, I will explain how this project is organized:

  - __.gitignore:__ This file says to git to ignore *_site* directory that Jekyll will generate each time it is committed. Because this directory and all the files inside are written each time they are committed, I do not want this directory under version control.
  
  - __.config.yml:__ This file tells Jekyll the name of my site (*número de Reynolds*) and the version of Markdown I'm using (*karmdown*).
  
  - __index.html:__ This file gives the structure of the feed page, the one that will be acessed when people enter the main url.
  
  - __\_layouts/:__ This folder is it where all the files that do the layout of my site pages will be placed.
      
    - __default.html:__ This is my main layout. This file contains repeated elements on all pages, like \<head> or \<footer> tags. This file makes the maintenance of my site much easier because every time I want to change anything on it (i.e., something on \<head> or another code placed in this file) it will appear on every page that loads it.
    
    - __post.html:__ This file will be the structure for each page that contains a post (in *_posts/*). Note that this file calls the *_layout/default.html* file, so when we use it we are using as well the *_layout/default.html* file.
    
   - __\_posts/:__ This folder contains all the files (*.md* files) which are the posts that will appear on the site. Every single *.md* file should contain an header that calls the *\_layouts/post.html* layout.
   
  - __\blog:__ This folder contains files related to the *o blog* page.
    
    - __index.html:__ This file contains the structure that says how will all the posts (from *\_posts/*) be placed in one page (i.e. with title and reference url).
