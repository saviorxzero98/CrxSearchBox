let SearchEngines = {
    google: {
        id: 'google',
        title: 'Google',
        searchUrl: 'https://www.google.com.tw/search?q=${search}&oq=${search}',
        suggestUrl: 'https://www.google.com/complete/search?client=firefox&q=${search}',
        isEnable: true
    },

    bing: {
        id: 'bing',
        title: 'Bing',
        searchUrl: 'https://www.bing.com/search?q=${search}',
        suggestUrl: 'https://api.bing.com/osjson.aspx?query=${search}&language=zh-TW&form=OSDJAS',
        isEnable: true
    },

    duckduckgo: {
        id: 'duckduckgo',
        title: 'DuckDuckGo',
        searchUrl: 'https://duckduckgo.com/?q=${search}&ia=web',
        suggestUrl: 'https://duckduckgo.com/ac/?q=${search}&kl=tw-tzh&type=list',
        isEnable: true
    },

    yahoo: {
        id: 'yahoo',
        title: 'Yahoo奇摩!',
        searchUrl: 'https://tw.search.yahoo.com/search?p=${search}&fr=opensearch',
        suggestUrl: 'https://tw.search.yahoo.com/sugg/os?command=${search}&output=fxjson&fr=opensearch',
        isEnable: true
    },

    yahoo_dict: {
        id: 'yahoo_dict',
        title: 'Yahoo奇摩!字典',
        searchUrl: 'https://tw.dictionary.search.yahoo.com/search?p=${search}&fr=opensearch',
        suggestUrl: 'https://tw.search.yahoo.com/sugg/os?command=${search}&output=fxjson&fr=opensearch&pubid=1306&appid=tw.dictionary.search.yahoo.com',
        isEnable: true
    },

    wikipedia: {
        id: 'wikipedia',
        title: '維基百科',
        searchUrl: 'https://zh.wikipedia.org/w/index.php?search=${search}',
        suggestUrl: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: true
    },

    wikiwand: {
        id: 'wikiwand',
        title: 'Wikiwand',
        searchUrl: 'https://www.wikiwand.com/zh-tw/${search}',
        suggestUrl: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: true
    },

    wiktionary: {
        id: 'wiktionary',
        title: '維基辭典',
        searchUrl: 'https://zh.wiktionary.org/zh-hant/${search}',
        suggestUrl: 'https://zh.wiktionary.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: false
    },

    gamer_acg: {
        id: 'gamer_acg',
        title: '巴哈姆特',
        searchUrl: 'https://acg.gamer.com.tw/search.php?kw=${search}',
        suggestUrl: 'https://acg.gamer.com.tw/ajax/typeahead.php?kw=${search}&m=0',
        isEnable: true
    },

    youtube: {
        id: 'youtube',
        title: 'YouTube',
        searchUrl: 'https://www.youtube.com/results?search_query=${search}',
        suggestUrl: 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}',
        isEnable: true
    },

    google_map: {
        id: 'google_map',
        title: 'Google地圖',
        searchUrl: 'https://maps.google.com/maps?q=${search}',
        suggestUrl: 'https://www.google.com/complete/search?client=firefox&q=${search}',
        isEnable: true
    },
    
    ecosia: {
        id: 'ecosia',
        title: 'Ecosia',
        searchUrl: 'https://www.ecosia.org/search?q=${search}',
        suggestUrl: 'https://ac.ecosia.org/autocomplete?q=${search}&type=list',
        isEnable: false
    }
}