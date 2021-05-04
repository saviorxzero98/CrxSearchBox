$(function () {
	// 初始化
	chrome.storage.local.get(["SearchEngine"], function(items){
		var searchEngine = items["SearchEngine"] || "google";
		$("#SearchEngine").val(searchEngine);
		
		initialAutocomplete();
	});
    
	// 設定自動完成
    $("#SearchInput").autocomplete({
        source: autocompleteSuggestSource
    });

	// 改變搜尋引擎
    $("#SearchEngine").change(function () {
		chrome.storage.local.set({ "SearchEngine": $("#SearchEngine").val() }, function(){});
        initialAutocomplete();
    })

	// 按下搜尋
	$("#StartSearch").click(function () {
		startSearch();
	});
	$("#SearchInput").keypress(function(e) {
		if(e.which == 13) {
			startSearch();
		}
	});

	// 初始化自動完成
	function initialAutocomplete() {
	    $("#SearchInput").autocomplete({
	        source: autocompleteSuggestSource
	    });
	}

	// 設定自動完成資料
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
	                url = "https://api.bing.com/osjson.aspx?query=" + searchKeyword + "&language=zh-TW&form=OSDJAS";
					break;
				case "yahoo":
					url = "https://tw.search.yahoo.com/sugg/os?command=" + searchKeyword + "&output=fxjson&fr=opensearch";
					break;
				case "yahoodict":
					url = "https://tw.search.yahoo.com/sugg/os?command=" + searchKeyword + "&output=fxjson&fr=opensearch&pubid=1306&appid=tw.dictionary.search.yahoo.com";
					break;
				case "duckduckgo":
				    url = "https://duckduckgo.com/ac/?q=" + searchKeyword + "&kl=tw-tzh&type=list";
					break;
				case "google":
				case "baha":
				case "azo":
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
	
	// 設定開始搜尋
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
	                url = "https://tw.search.yahoo.com/search?p=" + searchKeyword + "&fr=opensearch";
					break;
				case "yahoodict":
					url = "https://tw.dictionary.search.yahoo.com/search?p=" + searchKeyword + "&fr=opensearch";
					break;
	            case "google":
					url = "https://www.google.com.tw/search?q=" + searchKeyword + "&oq=" + searchKeyword;
					break;
				case "duckduckgo":
					url = "https://duckduckgo.com/?q=" + searchKeyword + "&ia=web";
					break;
				case "baha":
					url = "https://search.gamer.com.tw/?q=" + searchKeyword
					break;
				case "azo":
					url = "http://www.azofreeware.com/search?q=" + searchKeyword
					break;
	        }
            
	        if (url) {
				chrome.tabs.create({ url: url });
	        }
	    }
	}
});