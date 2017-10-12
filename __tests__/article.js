const mustache = require('mustache');
var read = require('read-file');
const html = read.sync('./src/elements/article.html', 'utf8');

test('empty test of article', () => {
    expect(mustache.render(html, {})).toBe('<article></article>');
});

test('hidden test of article', () => {
    expect(mustache.render(html, {articleHidden: true})).toBe('<article aria-hidden="true"></article>');
});

test('content test of article', () => {
    expect(mustache.render(html, {article: 'some text'})).toBe('<article>some text</article>');
});