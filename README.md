# LouisvilleDogRunLDRA
Overhaul of the existing Louisville Dog Run website, which is need of a serious update (http://www.louisvilledogs.org/). This project
presented many challenges for me and still does, especially balance between design and function. I wanted to build from the ground up w/ no help from things like Bootstrap. Although it's not complete I'm going to finish this site w/ every intention of presenting to the park as a complete replacement. 

# CSS
All of the CSS is custom, however these stand out:
1. body, p, and h1- needed to be set w/ a margin: opx;, b/c they created a large margin of space at the 
top of the page which pushed the fixed navigation bar down too much. 
2. #navbar- I created to be fixed w/ a translucent black background, that includes a hover action that changes the link colors.  
3. @media queries- are set to function for cellphones and tablets. Each query resizes all images and text including the navigation bar. 

# JavaScript 
1. dogRunMap- is a custom Google API that creates markers for all locations on one map. The user can click each marker and gain information along with directions. 

