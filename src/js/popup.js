$(function () {
    initialAutocomplete();

    $("#SearchInput").autocomplete({
        source: autocompleteSuggestSource
    });

	$("#SearchInput").keypress(function(e) {
		if(e.which == 13) {
			startSearch();
		}
	});
	
    $("#SearchEngine").change(function () {
        initialAutocomplete();
    })

	$("#StartSearch").click(function () {
	    startSearch();
	});

	function initialAutocomplete() {
	    $("#SearchInput").autocomplete({
	        source: autocompleteSuggestSource
	    });
	}

	function autocompleteSuggestSource(request, response) {
	    var searchKeyword = encodeURIComponent($("#SearchInput").val());
	    var searchEngine = $("#SearchEngine").val();

	    if (searchEngine) {
	        var url = "";
	        switch (searchEngine) {
	            case "wikipedia":
	                url = "https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=" + searchKeyword + "&namespace=0&limit=10&suggest=true";
	                break;
	            case "wiktionary":
	                url = "https://zh.wiktionary.org/w/api.php?action=opensearch&format=json&formatversion=2&search=" + searchKeyword + "&namespace=0&limit=10&suggest=true";
	                break;
	            case "bing":
	                url = "https://api.bing.com/osjson.aspx?query=" + searchKeyword + "&amp;language=zh-TW&amp;form=OSDJAS";
	                break;
                case "google":
	            default:
	                url = "https://www.google.com/complete/search?client=firefox&q=" + searchKeyword;
	        }

	        $.ajax({
	            dataType: "json",
	            type: 'Get',
	            url: url,
	            success: function (data) {
	                $('input.suggest-user').removeClass('ui-autocomplete-loading');
	                if (data && Array.isArray(data) && data.length > 1) {
	                    response(data[1]);
	                }
	            },
	            error: function (data) {
	                $('input.suggest-user').removeClass('ui-autocomplete-loading');
	                var defaultData = [];
	                defaultData.push(searchKeyword);
	                response(defaultData)
	            }
	        });
	        return;
	    }

	    var defaultData = [];
	    defaultData.push(searchKeyword);
	    response(defaultData)
	}

	function startSearch() {
	    var searchKeyword = encodeURIComponent($("#SearchInput").val());
	    var searchEngine = $("#SearchEngine").val();

	    if (searchEngine) {
	        var url = "";
	        switch (searchEngine) {
	            case "wikipedia":
	                url = "https://zh.wikipedia.org/w/index.php?search=" + searchKeyword;
	                break;
	            case "wiktionary":
	                url = "https://zh.wiktionary.org/zh-hant/" + searchKeyword;
	                break;
	            case "bing":
	                url = "https://www.bing.com/search?q=" + searchKeyword;
	                break;
	            case "yahoo":
	                url = "https://tw.search.yahoo.com/search?p=" + searchKeyword + "&fr=opensearch"
	                break;
	            case "google":
	                url = "https://www.google.com.tw/search?q=" + searchKeyword + "&oq=" + searchKeyword;
	        }
            
	        if (url) {
				chrome.tabs.create({ url: url });
	        }
	    }
	}
});