(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1","Dropdown toolbar":"Выпадающая панель инструментов","Editor toolbar":"Панель инструментов редактора",Next:"Следующий",Previous:"Предыдущий","Rich Text Editor, %0":"Редактор, %0","Show more items":"Другие инструменты","Upload in progress":"Идёт загрузка"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));