class DefaultSuggestHelper {
    constructor(searchEngine) {
        this.searchEngine = searchEngine;
    }

    getSuggestTextList(search, callback) {
        if (this.searchEngine === undefined) {
            callback([]);
            return;
        }

        let url = this.searchEngine.suggestUrl ?? '';
        url = url.replace('${search}', search);

        if (url) {
            $.ajax({
                dataType: 'json',
                type: 'Get',
                url: url,
                success: (data) => {
                    $('input.suggest-user').removeClass('ui-autocomplete-loading');
                    
                    if (callback && typeof callback === 'function') {
                        if (data && Array.isArray(data) && data.length > 1) {
                            callback(data[1]); 
                            return;   
                        }
                        callback([ search ]);
                    }
                    else {
                        callback([]);
                    }
                },
                error: (data) => {
                    $('input.suggest-user').removeClass('ui-autocomplete-loading');
                    
                    if (callback && typeof callback === 'function') {
                        callback([ search ]);
                    }
                    else {
                        callback([]);
                    }
                }
            });
        }
    }
}

class GamerAcgSuggestHelper {
    constructor(searchEngine) {
        this.searchEngine = searchEngine;
    }

    getSuggestTextList(search, callback) {
        if (this.searchEngine === undefined) {
            callback([]);
            return;
        }

        let url = this.searchEngine.suggestUrl ?? '';
        url = url.replace('${search}', search);

        $.ajax({
            type: 'Get',
            url: url,
            success: (text) => {
                $('input.suggest-user').removeClass('ui-autocomplete-loading');
                
                if (text && callback && typeof callback === 'function') {
                    let data = text.split('<SPLIT>');

                    if (data.length !== 0) {
                        callback(data); 
                        return;   
                    }
                    callback([ search ]);
                }
                else {
                    callback([]);
                }
            },
            error: (text) => {
                $('input.suggest-user').removeClass('ui-autocomplete-loading');
                
                if (callback && typeof callback === 'function') {
                    callback([ search ]);
                }
                else {
                    callback([]);
                }
            }
        });

        if (callback && typeof callback === 'function') {
            callback([ search ]);
        }
        else {
            callback([]);
        }
    }
}

let SuggestHelperFactory = {
    create: (searchEngine) => {
        if (searchEngine && searchEngine.id) {
            switch (searchEngine.id) {
                case SearchEngines.gamer_acg.id:
                    return new GamerAcgSuggestHelper(searchEngine);

                default:
                    return new DefaultSuggestHelper(searchEngine);
            }
        }
    }
}

class SearchHelper {
    constructor(searchEngine, options) {
        this.searchEngine = searchEngine;

        if (options) {
            if (options.openType) {
                this.options = options;
            }
            else {
                this.options.openType = 'newtab';
            }
        }
        else {
            this.options = { 
                openType: 'newtab' 
            };
        }
    }

    search(search) {
        if (this.searchEngine === undefined) {
            return;
        }

        let url = this.searchEngine.searchUrl ?? '';
        url = url.replace('${search}', search);

        if (url) {
            if (this.options) {
                switch (this.options.openType) {
                    case 'current':
                        window.location.href = url;
                        break;

                    case 'newtab':
                    default:
                        chrome.tabs.create({ url: url });
                        break;
                }
            }
            else {
                chrome.tabs.create({ url: url });
            }
        }
    }
}