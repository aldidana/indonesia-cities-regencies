const { log } = console
const TD_NAME = 'td:nth-child(2)'
const TD_PROVINCE = 'td:nth-child(3)'
const TD_ISLAND = 'td:nth-child(4)'
const TD_CAPITAL = 'td:nth-child(5)'

/**
 * DOM.querySelectorAll wrapper to return iterable DOM instead of NodeList
 * @param {String} q Standard CSS selector
 * @param {DOM} ref DOM reference, default to document (HTMLDocument)
 * @returns {Array<DOM>} All DOM elements
 */
const $_all = (q, ref = document) => [...ref.querySelectorAll(q)]

/**
 * DOM.querySelector wrapper
 * @param {String} q Standard CSS selector
 * @param {DOM} ref DOM reference, default to document (HTMLDocument)
 * @returns {DOM} DOM element
 */
const $_one = (q, ref = document) => ref.querySelector(q)

/**
 * Wikipedia specific scraping table,
 * assuming that the format from wikipedia link provided in README is unchanged
 * get all <tr> childNodes from <table:nth-of-type(`idx`)>
 * @param {*} idx index of table in CSS selector
 * @returns {Array<Object>} JSON format of scraped data
 */
const scrape = (idx) => { // eslint-disable-next-line
    const getHtmlText = (q, ref) => $_one(q, ref)
        ? $_one('a', $_one(q, ref))
            ? $_one('a', $_one(q, ref)).innerHTML
            : $_one(q, ref).innerHTML
        : '-'

    return $_all(`table:nth-of-type(${idx}) tr`)
        .map((DOM) => ({
            name: getHtmlText(TD_NAME, DOM),
            island: getHtmlText(TD_ISLAND, DOM),
            province: getHtmlText(TD_PROVINCE, DOM),
            capital: getHtmlText(TD_CAPITAL, DOM),
        }))
        .filter((object) => object.name)
}

// log to an object
log({
    regency: scrape(36),
    city: scrape(37),
})

/**
 * log to an array
 * note: the first sort is the least significant, the last sort is the most significant
 * 1. city (kota) / regency (kabupaten)
 * 2. island
 * 3. province
 * 4. name
 */
log([
    [...scrape(36), ...scrape(37)]
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.province.localeCompare(b.province))
        .sort((a, b) => a.island.localeCompare(b.island))
        .sort((a, b) => a.name.split(' ')[0].localeCompare(b.name.split(' ')[0]) * -1)
].pop())