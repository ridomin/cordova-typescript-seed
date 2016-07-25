call node_modules\.bin\tsc start.ts
call minifyjs -m -l 2 -i start.js -o start.min.js
call minify -c start.css
del start.js
call htmlminify start.html > startpage.html
start start.html