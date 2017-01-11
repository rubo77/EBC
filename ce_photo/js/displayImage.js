function displaySingleImage(imageUrl,height,width,serverPath,bgSoundUrl,bgSoundLoop,soundPath) {
	var url = serverPath+'/image.html?imageUrl='+imageUrl+'&width='+width+'&height='+height;
	if (bgSoundUrl) url += '&bgSoundUrl='+escape(bgSoundUrl)+'&bgSoundLoop='+bgSoundLoop+'&soundPath='+soundPath;
	var w = window.open(url,'singleImage','width='+width+',height='+height+',toolbar=no,status=no,scrollbars=no,location=no,resizable=yes');
}