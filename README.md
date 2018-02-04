# numerodereynolds
### personal blog

In this file, I will explain how this project is organized:

  - .gitignore : This file says to git to ignore '_site' directory that Jekyll will generate each time it is committed. Because this directory and all the files inside are written each time they are committed, I do not want this directory under version control.
  
  - __.config.yml:__ This file tells Jekyll the name of my site (*número de Reynolds*) and the version of Markdown I'm using (*karmdown*).
  
  - __index.html:__ This file gives the structure of the feed page, the one that will be acessed when people enter the main url.
  
  - __/layouts:__ This folder is it where all the files that do the layout of my site pages will be placed.
      
    - __default.html:__ This is my main layout. This file contains repeated elements on all pages, like \<head> or \<footer> tags. This file makes the maintenance of my site much easier because every time I want to change anything on it (i.e., something on <head> or another code placed in this file) it will appear on every page that loads it.
