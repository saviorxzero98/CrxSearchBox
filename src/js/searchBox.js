let InitialSearchBox = (options) => {
    // 建立下拉選項
    let initialOptions = () => {
        let keys = Object.keys(SearchEngines);
        for (let key of keys) {
            let searchEngine = SearchEngines[key];

            if (searchEngine && searchEngine.isEnable === true) {
                $('#SearchEngine').append($('<option>', {
                    value: searchEngine.id,
                    text: searchEngine.title
                }));
            }
        }
    };

    initialOptions();

    // 初始化
    chrome.storage.local.get(['SearchEngine'], (results) => {
        let searchEngine = results['SearchEngine'] || SearchEngines.google.id;
        $('#SearchEngine').val(searchEngine);
        initialAutocomplete();
    });
    
    //-------------------------------------------------------

    // 初始化自動完成
    let initialAutocomplete = () => {
        $('#SearchInput').autocomplete({
            source: autocompleteSuggestSource
        });
    }

    // 設定自動完成資料
    let autocompleteSuggestSource = (request, response) => {
        let searchKeyword = encodeURIComponent($('#SearchInput').val());
        let searchEngineId = $('#SearchEngine').val();
        let searchEngine = SearchEngines[searchEngineId];
        let helper = SuggestHelperFactory.create(searchEngine);
        helper.getSuggestTextList(searchKeyword, (result) => {
            response(result);
        });
    }
    
    // 設定開始搜尋
    let startSearch = () => {
        let searchKeyword = encodeURIComponent($('#SearchInput').val());
        let searchEngineId = $('#SearchEngine').val();
        let searchEngine = SearchEngines[searchEngineId];
        let helper = new SearchHelper(searchEngine, options);
        helper.search(searchKeyword);
    }

    //-------------------------------------------------------

    // 設定自動完成
    $("#SearchInput").autocomplete({
        source: autocompleteSuggestSource
    });

    // 改變搜尋引擎
    $('#SearchEngine').change(() => {
        chrome.storage.local.set({ 'SearchEngine': $('#SearchEngine').val() }, () => {});
        initialAutocomplete();
    });

    // 按下搜尋
    $('#StartSearch').click(() => {
        startSearch();
    });
    $('#SearchInput').keypress((e) => {
        if(e.which === 13) {
            startSearch();
        }
    });
}