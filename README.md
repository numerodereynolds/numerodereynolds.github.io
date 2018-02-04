# numerodereynolds
personal blog

In this file, I will explain how this project is organized:

  - .gitignore : This file says to git to ignore '_site' directory that Jekyll will generate each time it is committed. Because this directory and all the files inside are written each time they are committed, I do not want this directory under version control.
  
  - .config.yml : This file tells Jekyll the name of my site ("número de Reynolds") and the version of Markdown I'm using ("karmdown").
  
  - /layouts : This folder is it where all the files that do the layout of my site pages will be placed.
      
        - default.html : This is my main layout. This file contains repeated elements on all pages, like <head> or <footer> tags.
