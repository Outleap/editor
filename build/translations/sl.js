(function(d){	const l = d['sl'] = d['sl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Dropdown toolbar":"","Editor toolbar":"",Next:"",Previous:"","Rich Text Editor, %0":"","Show more items":""}	);l.getPluralForm=function(n){return (n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));