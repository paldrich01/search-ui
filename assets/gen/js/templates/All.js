Coveo.TemplateCache.registerTemplate("Table", Coveo.HtmlTemplate.fromString("  <div style=\"display: table-cell;\"><span class=\"CoveoResultLink\"></span></div>\n  <div style=\"display: table-cell;\"><span class=\"CoveoExcerpt\"></span></div>\n  <div style=\"display: table-cell;\"><span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span></div>\n", "options.layout === 'table'"), true, true)
Coveo.TemplateCache.registerTemplate("Card", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width: 32px\">\n      <div class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:left; padding-left: 10px\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"CoveoCardActionBar\">\n    <div class=\"CoveoQuickview\"></div>\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n", "options.layout === 'card'"), true, true)
Coveo.TemplateCache.registerTemplate("Default", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px;text-align:center;padding-top:7px;\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px;\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px;\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\">\n          <span class=\"CoveoExcerpt\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px;text-align:center\">\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-left: 15px;\">\n      <table class=\"CoveoFieldTable\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\">\n          </tr>\n          <tr data-field=\"@source\" data-caption=\"Source\">\n          </tr>\n          <tr data-field=\"@language\" data-caption=\"Language\">\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"), true, true)