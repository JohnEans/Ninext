# Ninext


**WARNING**: the code I share with you here is to be used exclusively for personal use. **I do not recommend using it for commercial purposes**.


I'm dropping here a series of HTML code for Ninox that allows to add features :

- **badges.html**: displays a badge on file and comment icons indicating the number of items contained in each.

- **evalJS.html**: adds a hook function to the Ninox eval function which allows to add new user functions, like for example EvalJS to call JavaScript from the Ninox script. 

- **completion.html**: sets the Ninox code editor to display an auto-completion list. To display the list, press **crtl+space** on Ninox Editor.

To use the features, copy the content of the .html files into a formula with html ninox function : `html("... content of .html file ...");`. The functions are activated as soon as the formula is executed by Ninox.
 
Another way is to put this code on the formula : `html(http("GET", Address of HTML source).result)`
In this case, the code will be read directly GitHub and be updated in real time. 

-badges : `html(http("GET", "https://raw.githubusercontent.com/JacquesTur/Ninext/main/badges.html").result)`

-evalJS : `html(http("GET", "https://raw.githubusercontent.com/JacquesTur/Ninext/main/evalJS.html").result)`

-completion : `html(http("GET", "https://raw.githubusercontent.com/JacquesTur/Ninext/main/completion.html").result)` 

Don't hesitate to write to me if you spot any bugs or if you need a particular feature.
