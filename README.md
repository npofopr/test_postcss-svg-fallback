## Windows 10 path to svg.

Plugin don't generate fallback png:

	postcss-svg-fallback: D:\Docs\Dropbox\!Project\test_svg_fallback\src\css\style.css:1:1: Could not find "../images/icon_reg.svg" at "D:\Docs\Dropbox\!Project\images\icon_reg.svg"
	postcss-svg-fallback: D:\Docs\Dropbox\!Project\test_svg_fallback\src\css\style.css:7:1: Could not find "../images/svg/icon_reg.svg" at "D:\Docs\Dropbox\!Project\images\svg\icon_reg.svg"

Example https://github.com/npofopr/test_postcss-svg-fallback 

What am i doing wrong?

===========

Thanks, i think

	basePath: '', // base path for the images found in the css
	dest: '', // destination for the generated SVGs

this path for images :)

png create, but svg don't copy in dest folder, it is right?

