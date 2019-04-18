const {html} = require('common-tags');

module.exports = () => {
  return html`
    <div class="w-codelabs-callout">
      <div class="w-codelabs-callout__header">
        <h2 class="w-codelabs-callout__lockup">Codelabs</h2>
        <div class="w-codelabs-callout__headline">See it in action</div>
        <div class="w-codelabs-callout__blurb">
          Learn more and put this guide into action.
        </div>
      </div>
      <ul class="w-unstyled-list w-codelabs-callout__list">
        <li class="w-codelabs-callout__listitem">
          <a class="w-codelabs-callout__link" href="#">
            Using imagemin with Grunt and some hella long text this is totally
            gonna wrap on mobile.
          </a>
        </li>
        <li class="w-codelabs-callout__listitem">
          <a class="w-codelabs-callout__link" href="#">
            Using imagemin with Gulp
          </a>
        </li>
        <li class="w-codelabs-callout__listitem">
          <a class="w-codelabs-callout__link" href="#">
            Using imagemin with Webpack
          </a>
        </li>
      </ul>
    </div>
  `;
};