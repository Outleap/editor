(function(d){	const l = d['lv'] = d['lv'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 no %1","Block quote":"Citāts",Bold:"Trekns","Bulleted List":"Nenumurēts Saraksts",Cancel:"Atcelt","Centered image":"Centrēts attēls","Change image text alternative":"Mainīt attēla alternatīvo tekstu","Choose heading":"Izvēlēties virsrakstu",Downloadable:"Lejupielādējams","Dropdown toolbar":"Papildus izvēlnes rīkjosla","Edit link":"Labot Saiti","Editor toolbar":"Redaktora rīkjosla","Enter image caption":"Ievadiet attēla parakstu","Full size image":"Pilna izmēra attēls",Heading:"Virsraksts","Heading 1":"Virsraksts 1","Heading 2":"Virsraksts 2","Heading 3":"Virsraksts 3","Heading 4":"Virsraksts 4","Heading 5":"Virsraksts 5","Heading 6":"Virsraksts 6","Image toolbar":"Attēlu rīkjosla","image widget":"attēla sīkrīks","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Kursīvs","Left aligned image":"Pa kreisi līdzināts attēls",Link:"Saite","Link URL":"Saites URL",Next:"Nākamā","Numbered List":"Numurēts Saraksts","Open in a new tab":"Atvērt jaunā cilnē","Open link in new tab":"Atvērt saiti jaunā cilnē",Paragraph:"Pagrāfs",Previous:"Iepriekšējā",Redo:"Uz priekšu","Rich Text Editor, %0":"Bagātinātais Teksta Redaktors, %0","Right aligned image":"Pa labi līdzināts attēls",Save:"Saglabāt","Show more items":"Parādīt vairāk vienumus","Side image":"Sānā novietots attēls","Text alternative":"Alternatīvais teksts","This link has no URL":"Saitei nav norādīts URL",Undo:"Atsaukt",Unlink:"Noņemt Saiti","Upload in progress":"Notiek augšupielāde","Widget toolbar":"Sīkrīku rīkjosla"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n != 0 ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));