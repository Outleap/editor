(function(d){	const l = d['pl'] = d['pl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1","Block quote":"Cytat blokowy",Bold:"Pogrubienie","Bulleted List":"Lista wypunktowana",Cancel:"Anuluj","Centered image":"Obraz wyrównany do środka","Change image text alternative":"Zmień tekst zastępczy obrazka","Choose heading":"Wybierz nagłówek",Downloadable:"Do pobrania","Dropdown toolbar":"Rozwijany pasek narzędzi","Edit link":"Edytuj odnośnik","Editor toolbar":"Pasek narzędzi edytora","Enter image caption":"Wstaw tytuł obrazka","Full size image":"Obraz w pełnym rozmiarze",Heading:"Nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6","Image toolbar":"Pasek narzędzi obrazka","image widget":"Obraz","Insert image":"Wstaw obraz","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Kursywa","Left aligned image":"Obraz wyrównany do lewej",Link:"Wstaw odnośnik","Link URL":"Adres URL",Next:"Następny","Numbered List":"Lista numerowana","Open in a new tab":"Otwórz w nowej zakładce","Open link in new tab":"Otwórz odnośnik w nowym oknie",Paragraph:"Akapit",Previous:"Poprzedni",Redo:"Ponów","Remove Format":"Usuń formatowanie","Rich Text Editor, %0":"Edytor tekstu sformatowanego, %0","Right aligned image":"Obraz wyrównany do prawej",Save:"Zapisz","Select all":"Zaznacz wszystko","Show more items":"Pokaż więcej","Side image":"Obraz dosunięty do brzegu, oblewany tekstem","Text alternative":"Tekst zastępczy obrazka","This link has no URL":"Nie podano adresu URL odnośnika",Undo:"Cofnij",Unlink:"Usuń odnośnik","Upload failed":"Przesyłanie obrazu nie powiodło się","Upload in progress":"Trwa przesyłanie","Widget toolbar":"Pasek widgetów"}	);l.getPluralForm=function(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));