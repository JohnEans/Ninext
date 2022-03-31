# Ninext 
###### Laboratory for the creation and testing of extensions for Ninox


---
**WARNING**: the code I share with you here is to be used exclusively for personal use. **I do not recommend using it for commercial purposes**.
---

I'm dropping here a series of HTML code for Ninox that allows to add features :

- **badges.html**: displays a badge on file and comment icons indicating the number of items contained in each.

- **evalJS.html**: adds a hook function to the Ninox eval function which allows to add new user functions, like for example EvalJS to call JavaScript from the Ninox script. 

- **completion.html**: sets the Ninox code editor to display an auto-completion list. To display the list, press **crtl+space** on Ninox Editor.

To use the features, copy this code into a formula with html ninox function :  
 
```
var configLoadModules := {
        completion: true,
        badges: true,
        evalJS: true
    };
function afterLoadModules() do
    if not isAdminMode() then closeRecord() end
end;
html(http("GET", "https://raw.githubusercontent.com/JacquesTur/Ninext/main/loadModules.html").result)
```

The functions are activated as soon as the formula is executed by Ninox.
**NOTA** : Once the code is initialized, the afterLoadModules function will be called. In the example above, the function closes the window in which the initalization formula is located. You can change this code and perform any operation you like.

Don't hesitate to write to me if you spot any bugs or if you need a particular feature.
