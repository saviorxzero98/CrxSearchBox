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
    bing_deep: {
        id: 'bing_deep',
        title: 'Bing 搜尋優化',
        searchUrl: 'https://www.bing.com/search?q=${search}&shm=cr&form=DEEPSH',
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
    brave: {
        id: 'brave',
        title: 'Brave',
        searchUrl: 'https://search.brave.com/search?q=${search}&source=web',
        suggestUrl: 'https://search.brave.com/api/suggest?q=${search}',
        isEnable: true
    },
    brave_leo_ai: {
        id: 'brave_leo_ai',
        title: 'Brave Leo AI',
        searchUrl: 'https://search.brave.com/search?q=${search}&source=web&summary=1',
        suggestUrl: 'https://search.brave.com/api/suggest?q=${search}',
        isEnable: true
    },
    yahoo: {
        id: 'yahoo',
        title: 'Yahoo奇摩!',
        searchUrl: 'https://tw.search.yahoo.com/search?p=${search}&fr=opensearch',
        suggestUrl: 'https://tw.search.yahoo.com/sugg/os?command=${search}&output=fxjson&fr=opensearch',
        isEnable: true
    },
    perplexity: {
        id: 'perplexity',
        title: 'Perplexity',
        searchUrl: 'https://www.perplexity.ai/search?q=${search}',
        suggestUrl: 'https://duckduckgo.com/ac/?q=${search}&kl=tw-tzh&type=list',
        isEnable: true
    },
    chatgpt: {
        id: 'chatgpt',
        title: 'ChatGPT',
        searchUrl: 'https://chatgpt.com/?q=${search}',
        suggestUrl: '',
        isEnable: true
    },
    compilot: {
        id: 'compilot',
        title: 'Compilot',
        searchUrl: 'https://copilot.microsoft.com/?q=${search}&sendquery=1&showconv=1',
        suggestUrl: 'https://api.bing.com/osjson.aspx?query=${search}&language=zh-TW&form=OSDJAS',
        isEnable: true
    },
    wikipedia: {
        id: 'wikipedia',
        title: '維基百科',
        searchUrl: 'https://zh.wikipedia.org/w/index.php?search=${search}',
        suggestUrl: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: true
    },
    yahoo_dict: {
        id: 'yahoo_dict',
        title: 'Yahoo奇摩!字典',
        searchUrl: 'https://tw.dictionary.search.yahoo.com/search?p=${search}&fr=opensearch',
        suggestUrl: 'https://tw.search.yahoo.com/sugg/os?command=${search}&output=fxjson&fr=opensearch&pubid=1306&appid=tw.dictionary.search.yahoo.com',
        isEnable: true
    },
    youtube: {
        id: 'youtube',
        title: 'YouTube',
        searchUrl: 'https://www.youtube.com/results?search_query=${search}',
        suggestUrl: 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${search}',
        isEnable: true
    },
    gamer_acg: {
        id: 'gamer_acg',
        title: '巴哈姆特',
        searchUrl: 'https://acg.gamer.com.tw/search.php?kw=${search}',
        suggestUrl: 'https://acg.gamer.com.tw/ajax/typeahead.php?kw=${search}&m=0',
        isEnable: true
    },
    google_map: {
        id: 'google_map',
        title: 'Google地圖',
        searchUrl: 'https://maps.google.com/maps?q=${search}',
        suggestUrl: 'https://www.google.com/complete/search?client=firefox&q=${search}',
        isEnable: true
    },


    // Disable List
    claude: {
        id: 'claude',
        title: 'Claude',
        searchUrl: 'https://claude.ai/new?q=${search}',
        suggestUrl: '',
        isEnable: false
    },
    norton: {
        id: 'norton',
        title: 'Norton',
        searchUrl: 'https://nortonsafe.search.ask.com/web?q=${search}',
        suggestUrl: 'https://ss-sym.search.ask.com/ss?limit=10&li=ff&hl=zh-TW&q=${search}',
        isEnable: false
    },
    wikiwand: {
        id: 'wikiwand',
        title: 'Wikiwand',
        searchUrl: 'https://www.wikiwand.com/zh-tw/${search}',
        suggestUrl: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: false
    },
    wiktionary: {
        id: 'wiktionary',
        title: '維基辭典',
        searchUrl: 'https://zh.wiktionary.org/zh-hant/${search}',
        suggestUrl: 'https://zh.wiktionary.org/w/api.php?action=opensearch&format=json&formatversion=2&search=${search}&namespace=0&limit=10&suggest=true',
        isEnable: false
    },
    startpage: {
        id: 'startpage',
        title: 'StartPage',
        searchUrl: 'https://www.startpage.com/sp/search?query=${search}&cat=web&pl=opensearch&language=english',
        suggestUrl: 'https://www.startpage.com/suggestions?q=${search}&format=opensearch',
        isEnable: false
    },
    ecosia: {
        id: 'ecosia',
        title: 'Ecosia',
        searchUrl: 'https://www.ecosia.org/search?q=${search}',
        suggestUrl: 'https://ac.ecosia.org/autocomplete?q=${search}&type=list',
        isEnable: false
    }
}