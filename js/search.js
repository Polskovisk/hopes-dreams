var engines = engines();

$.gI('scrh').onkeyup = (e) => {
    console.log(e)
     let args = e.target.value.split(' '),
         prefix = args[0],
         engine = engines['g'][0], // default engine
         str = 0;

     if (e.key == 'Enter') {
         if (prefix.indexOf('!') == 0)
             (engine = engines[prefix.substr(1)][0], str = 3);

         window.location = engine + args.join(' ').substr(str).toString().replace(/\s+/m, '%20');
     } else if (e.keyCode == 27)
         $.gI('search').classList.remove('activeflex');
 };