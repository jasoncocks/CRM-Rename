
/***
  When downloading a file through CRM, attachments are saved in Downloads folder as
     "'" + <original file name> + "'"
  These quotes destroy Windows file associations and subsequently users cannot open the attachments.
***/

chrome.downloads.onDeterminingFilename.addListener(
	function(item, suggest)
	{
		sNewFileName = item.filename;

		// remove all leading quotes
		while (sNewFileName.length > 0 && sNewFileName[0] == "'")
		{
			sNewFileName = sNewFileName.substring(1);
		}

		// remove all trailing quotes
		while (sNewFileName.length > 0 && sNewFileName[sNewFileName.length -1] == "'")
		{
			sNewFileName = sNewFileName.slice(0, -1);
		}

		suggest(
			{
				filename: sNewFileName, conflictAction: "overwrite"
			}
		);
	}
);