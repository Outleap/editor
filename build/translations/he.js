(function(d){	const l = d['he'] = d['he'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"0% מתוך %1","Dropdown toolbar":"סרגל כלים נפתח","Editor toolbar":"סרגל הכלים",Next:"הבא",Previous:"הקודם","Rich Text Editor, %0":"עורך טקסט עשיר, %0","Show more items":"הצד פריטים נוספים","Upload in progress":"העלאה מתבצעת"}	);l.getPluralForm=function(n){return (n == 1 && n % 1 == 0) ? 0 : (n == 2 && n % 1 == 0) ? 1: (n % 10 == 0 && n % 1 == 0 && n > 10) ? 2 : 3;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));