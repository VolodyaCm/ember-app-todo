'use strict';



;define('todo-app/adapters/group', ['exports', 'ember-local-storage/adapters/local'], function (exports, _local) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _local.default.extend({});
});
;define('todo-app/adapters/subgroup', ['exports', 'ember-local-storage/adapters/local'], function (exports, _local) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _local.default.extend({});
});
;define('todo-app/adapters/task', ['exports', 'ember-local-storage/adapters/local'], function (exports, _local) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _local.default.extend({});
});
;define('todo-app/app', ['exports', 'todo-app/resolver', 'ember-load-initializers', 'todo-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('todo-app/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define('todo-app/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('todo-app/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define('todo-app/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define('todo-app/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define('todo-app/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define('todo-app/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define('todo-app/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define('todo-app/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define('todo-app/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define('todo-app/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define('todo-app/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('todo-app/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define('todo-app/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define('todo-app/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('todo-app/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define('todo-app/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('todo-app/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define('todo-app/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define('todo-app/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define('todo-app/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define('todo-app/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define('todo-app/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define('todo-app/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('todo-app/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define('todo-app/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define('todo-app/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define('todo-app/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define('todo-app/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define('todo-app/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define('todo-app/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define('todo-app/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define('todo-app/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define('todo-app/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define('todo-app/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('todo-app/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('todo-app/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define('todo-app/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('todo-app/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('todo-app/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define('todo-app/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define('todo-app/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define('todo-app/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('todo-app/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define('todo-app/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define('todo-app/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define('todo-app/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define('todo-app/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define('todo-app/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
;define('todo-app/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
;define('todo-app/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define('todo-app/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define('todo-app/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define('todo-app/components/export-data', ['exports', 'file-saver'], function (exports, _fileSaver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    exportCompletedTasks: true,
    actions: {
      downloadFile(ws_data, type) {
        ws_data.then(function (result) {
          const fileType = type === 'xlsx' ? 'xlsx' : 'csv';
          var wb = XLSX.utils.book_new();
          wb.Props = {
            Title: "Todo app",
            Subject: "Tasks",
            Author: "Todo",
            CreatedDate: new Date()
          };
          wb.SheetNames.push("Tasks Sheet");
          var ws = XLSX.utils.aoa_to_sheet(result);
          wb.Sheets["Tasks Sheet"] = ws;
          var wbout = XLSX.write(wb, {
            bookType: fileType,
            type: 'binary'
          });
          function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
          };
          _fileSaver.default.saveAs(new Blob([s2ab(wbout)], {
            type: "application/octet-stream"
          }), `Task.${fileType}`);
        });
      }
    }
  });
});
;define('todo-app/components/group-list-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    Group: Ember.inject.service('group'),
    store: Ember.inject.service(),
    storeItems: Ember.inject.service('store-items'),
    locationData: Ember.inject.service('location-data'),

    actions: {
      deleteGroup(groupId, event) {
        event.stopPropagation();
        const store = this.get('store');
        const Group = this.get('Group');
        const locationData = this.get('locationData');
        const storeItems = this.get('storeItems');
        const groups = store.peekAll('group');
        const currentGroup = store.peekRecord('group', groupId);
        const groupIndex = groups.indexOf(currentGroup);
        if (confirm('Delete this group?')) {
          Group.deleteItem('group', groupId).then(() => {
            if (!storeItems.activeItem('group')) {
              const group = groups.objectAt(groupIndex - 1);
              const subgroups = group.get('subgroups');
              const subgroup = subgroups.getWithDefault('firstObject', { id: null });
              const groupId = group.get('id');
              const subgroupId = subgroup.id;
              storeItems.changeState('group');
              storeItems.changeState('subgroup');
              locationData.saveLocation(groupId, subgroupId);
            }
          });
        }
      },

      saveLocation(groupId) {
        const model = this.get('model');
        const locationData = this.get('locationData');
        const storeItems = this.get('storeItems');
        storeItems.changeState('group', false);
        locationData.saveLocation(groupId, null);
        model.subgroups.then(subgroups => {
          const subgroup = subgroups.getWithDefault('firstObject', { id: null });
          const subgroupId = subgroup.id;
          storeItems.changeState('subgroup', false);
          locationData.saveLocation(undefined, subgroupId);
        });
      }
    }
  });
});
;define('todo-app/components/import-data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const fileTypes = {
    csv: {
      windows: 'application/vnd.ms-excel',
      mac: 'text/csv'
    },
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };

  function execute(generator, yieldValue) {
    let next = generator.next(yieldValue);
    if (!next.done) {
      next.value.then(result => execute(generator, result), err => generator.throw(err));
    };
  }

  exports.default = Ember.Component.extend({
    store: Ember.inject.service(),
    locationData: Ember.inject.service('location-data'),
    group: Ember.inject.service('group'),
    subgroup: Ember.inject.service('subgroup'),
    task: Ember.inject.service('task'),
    location: Ember.computed.alias('locationData.location'),
    err: {
      fileType: false
    },
    actions: {
      importData() {
        const file = document.querySelector('.fileInput').files[0];
        const reader = new FileReader();
        reader.onload = event => {
          const data = XLSX.read(event.target.result, {
            type: 'binary'
          });
          const jsonData = this.sheetToJson(file.type, data);
          if (jsonData) {
            execute(this.saveDataToStore(jsonData));
            setTimeout(() => {
              this.set('location.task.key', 'import');
            });
          }
        };
        reader.readAsBinaryString(file);
      }
    }
  }).reopen({
    *saveDataToStore(jsonData) {
      const store = this.get('store');
      const Group = this.get('group');
      const Subgroup = this.get('subgroup');
      const Task = this.get('task');
      for (let item of jsonData) {
        const [id, name, state, type, bindId] = item;
        if (type == 'group') {
          if (store.peekRecord('group', id)) continue;
          const record = Group.createItem(id, name, state);
          yield Group.saveItem('group', record);
        } else if (type == 'subgroup') {
          if (store.peekRecord('subgroup', id)) continue;
          const group = store.peekRecord('group', bindId);
          const record = Subgroup.createItem(id, name, state, {
            group
          });
          yield Subgroup.saveItem('subgroup', record);
        } else if (type == 'task') {
          if (store.peekRecord('task', id)) continue;
          const subgroup = store.peekRecord("subgroup", bindId);
          const record = Task.createItem(id, name, state, {
            subgroup
          });
          yield Task.saveItem('task', record);
        }
      }
    },

    sheetToJson(fileType, data) {
      if (fileType === fileTypes.csv.mac) {
        return XLSX.utils.sheet_to_json(data.Sheets['Sheet1'], {
          header: 1,
          raw: true
        });
      } else if (fileType === fileTypes.xlsx) {
        return XLSX.utils.sheet_to_json(data.Sheets['Tasks Sheet'], {
          header: 1,
          raw: true
        });
      } else {
        this.set('err.fileType', true);
      }
    }
  });
});
;define('todo-app/components/main-group-list-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    Group: Ember.inject.service('group'),
    store: Ember.inject.service(),
    storeItems: Ember.inject.service('store-items'),
    locationData: Ember.inject.service('location-data'),

    actions: {
      saveLocation(groupId) {
        const store = this.get('store');
        const locationData = this.get('locationData');
        const storeItems = this.get('storeItems');
        const subgroups = store.peekRecord('group', groupId).subgroups;
        const subgroup = subgroups.getWithDefault('firstObject', { id: null });
        const subgroupId = subgroup.id;

        storeItems.changeState('group', false);
        storeItems.changeState('subgroup', false);
        locationData.saveLocation(groupId, subgroupId);
      }
    }
  });
});
;define('todo-app/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
;define('todo-app/components/subgroup-list-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    Subgroup: Ember.inject.service('subgroup'),
    store: Ember.inject.service(),
    storeItems: Ember.inject.service('store-items'),
    locationData: Ember.inject.service('location-data'),

    actions: {
      saveLocation(subgroupId) {
        const locationData = this.get('locationData');
        const storeItems = this.get('storeItems');
        storeItems.changeState('subgroup', false);
        locationData.saveLocation(undefined, subgroupId);
      }
    }
  });
});
;define('todo-app/components/task-list-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    store: Ember.inject.service(),
    locationData: Ember.inject.service('location-data'),
    location: Ember.computed.alias('locationData.location'),
    taskState: Ember.inject.service('task-state'),
    states: Ember.computed.alias('taskState.states'),
    Task: Ember.inject.service('task'),

    actions: {
      deleteTask(taskId) {
        if (confirm('Delete this task?')) {
          const Task = this.get('Task');
          Task.deleteItem('task', taskId);
          this.set('location.task.key', null);
          this.set('location.task.key', taskId);
        }
      },

      taskStateToggle(taskId) {
        const states = this.get('states');
        const taskState = this.get('taskState');
        if (!states.get(taskId)) taskState.addState(taskId);
        states.get(taskId).taskState();
      }
    }
  });
});
;define('todo-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('todo-app/controllers/todo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function generateId() {
    return `${Math.floor(Math.random() * 10 ** 10)}`;
  }

  exports.default = Ember.Controller.extend({
    init() {
      this._super(...arguments);
      const locationData = this.get('locationData');
      const Group = this.get('Group');
      const Subgroup = this.get('Subgroup');
      const groupId = 'g_00000000001';
      const subgroupId = 'sg_0000000001';
      const group = Group.createItem(groupId, 'main group', true, { main: true });
      Group.saveItem('group', group).then(group => {
        const subgroup = Subgroup.createItem(subgroupId, 'main subgroup', true, {
          main: true,
          group
        });
        Subgroup.saveItem('subgroup', subgroup);
        locationData.saveLocation(groupId, subgroupId);
      });
      setTimeout(() => {
        this.set('location.task.state', 'start');
      });
    },
    Group: Ember.inject.service('group'),
    Subgroup: Ember.inject.service('subgroup'),
    Task: Ember.inject.service('task'),
    storeItems: Ember.inject.service('store-items'),
    locationData: Ember.inject.service('location-data'),
    location: Ember.computed.alias('locationData.location'),
    menu: false,
    modal: {
      open: false,
      type: null
    },
    exportCompletedTasks: true,
    group: '',
    subgroup: '',
    task: '',
    actions: {
      addGroup(e) {
        const Group = this.get('Group');
        const locationData = this.get('locationData');
        const storeItems = this.get('storeItems');
        if (e.keyCode == 13) {
          const groupId = `g_${generateId()}`;
          storeItems.changeState('group', false);
          locationData.clearLocation('subgroup');
          const item = Group.createItem(groupId, this.group, false);
          Group.saveItem('group', item).then(result => {
            result.set('state', true);
            locationData.saveLocation(groupId);
            setTimeout(() => Group.scrollDown());
          });
        }
      },

      addSubgroup(e) {
        const store = this.get('store');
        const Subgroup = this.get('Subgroup');
        const storeItems = this.get('storeItems');
        const locationData = this.get('locationData');
        const location = locationData.location;
        if (e.keyCode == 13) {
          const subgroupId = `sg_${generateId()}`;
          storeItems.changeState('subgroup', false);
          const groupId = location.group.key;
          const group = store.peekRecord('group', groupId);
          const subgroup = Subgroup.createItem(subgroupId, this.subgroup, false, {
            group
          });
          Subgroup.saveItem('subgroup', subgroup).then(result => {
            result.set('state', true);
            locationData.saveLocation(undefined, subgroupId);
            setTimeout(() => Subgroup.scrollRight());
          });
        }
      },

      addTask() {
        const store = this.get('store');
        const locationData = this.get('locationData');
        const location = locationData.location;
        const Task = this.get('Task');
        const taskId = `t_${generateId()}`;
        const currentSubgroupId = location.subgroup.key;
        const currentSubgroup = store.peekRecord('subgroup', currentSubgroupId);
        const task = Task.createItem(taskId, this.task, 'active', {
          subgroup: currentSubgroup
        });
        Task.saveItem('task', task);
        this.set('location.task.key', taskId);
        setTimeout(() => Task.scrollDown());
      },

      deleteCompletedTask() {
        if (confirm('Delete completed tasks?')) {
          const model = this.get('model');
          const Task = this.get('Task');
          const tasks = model.tasks;
          tasks.forEach(el => {
            if (el.state === 'completed') Task.deleteItem('task', el.id);
          });
        }
      },

      deleteSubgroup(subgroupId) {
        if (confirm('Delete this subgroup?')) {
          const store = this.get('store');
          const model = this.get('model');
          const Subgroup = this.get('Subgroup');
          const locationData = this.get('locationData');
          const storeItems = this.get('storeItems');
          const subgroup = store.peekRecord('subgroup', subgroupId);
          const subgroupIndex = model.subgroups.indexOf(subgroup);
          Subgroup.deleteItem('subgroup', subgroupId).then(() => {
            if (model.subgroups.length) {
              if (!subgroupIndex && model.subgroups.length) {
                locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex).get('id'));
              } else if (subgroupIndex) {
                locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex - 1).get('id'));
              }
            } else {
              locationData.clearLocation('subgroup');
            }
          });
        }
      },

      pressEnter(addtask, e) {
        if (e.keyCode == 13) {
          addtask();
        }
      },

      toggleModal(type) {
        if (this.get('modal.open')) {
          this.toggleProperty('modal.open');
          this.set('type', null);
        } else {
          this.toggleProperty('modal.open');
          this.set('modal.type', type);
        }
      },

      toggleMenu() {
        if (this.menu) {
          this.set('menu', false);
        } else {
          this.set('menu', true);
        }
      },

      log() {
        console.log('LOCATION', this.get('locationData').location);
        console.log('MODEL', this.get('model'));
      }
    }
  });
});
;define('todo-app/helpers/app-version', ['exports', 'todo-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('todo-app/helpers/array-items', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.arrayItems = arrayItems;
  function arrayItems(params) {
    const [store, exportCompletedTasks] = params;
    return store.findAll('group').then(function (result) {
      const data = [];
      result.forEach(el => {
        data.push([el.get('id'), el.get('name'), el.get('state'), 'group']);
      });
      return data;
    }).then(function (data) {
      return store.findAll('subgroup').then(function (result) {
        result.forEach(el => {
          data.push([el.get('id'), el.get('name'), el.get('state'), 'subgroup', el.get('group.id')]);
        });
        return data;
      });
    }).then(function (data) {
      return store.findAll('task').then(function (result) {
        result.forEach(el => {
          if (el.get('state') === 'active' && !exportCompletedTasks) {
            data.push([el.get('id'), el.get('task'), el.get('state'), 'task', el.get('subgroup.id')]);
          } else if (exportCompletedTasks) {
            data.push([el.get('id'), el.get('task'), el.get('state'), 'task', el.get('subgroup.id')]);
          }
        });
        return data;
      });
    });
  }

  exports.default = Ember.Helper.helper(arrayItems);
});
;define('todo-app/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define('todo-app/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define('todo-app/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define('todo-app/helpers/check-modal-type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkModalType = checkModalType;
  function checkModalType(params) {
    return params[0] && params[1] === params[2] ? true : false;
  }

  exports.default = Ember.Helper.helper(checkModalType);
});
;define('todo-app/helpers/compire', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compire = compire;
  function compire(params) {
    return params[0] === params[1];
  }

  exports.default = Ember.Helper.helper(compire);
});
;define('todo-app/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
;define('todo-app/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define('todo-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('todo-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('todo-app/helpers/subtract-unit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.subtractUnit = subtractUnit;
  function subtractUnit(params) {
    return params[0] - params[1];
  }

  exports.default = Ember.Helper.helper(subtractUnit);
});
;define('todo-app/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define('todo-app/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
;define('todo-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'todo-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('todo-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('todo-app/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define('todo-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('todo-app/initializers/export-application-global', ['exports', 'todo-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('todo-app/initializers/load-bootstrap-config', ['exports', 'todo-app/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
;define('todo-app/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _localStorageAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _localStorageAdapter.initialize;
    }
  });
});
;define('todo-app/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('todo-app/models/group', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    state: _emberData.default.attr('boolean'),
    main: _emberData.default.attr('boolean', { defaultValue: false }),
    subgroups: _emberData.default.hasMany('subgroup')
  });
});
;define('todo-app/models/subgroup', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    state: _emberData.default.attr('boolean'),
    main: _emberData.default.attr('boolean', { defaultValue: false }),
    group: _emberData.default.belongsTo('group'),
    tasks: _emberData.default.hasMany('task')
  });
});
;define('todo-app/models/task', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    task: _emberData.default.attr('string'),
    state: _emberData.default.attr('string'),
    subgroup: _emberData.default.belongsTo('subgroup')
  });
});
;define('todo-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('todo-app/router', ['exports', 'todo-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('todo');
  });

  exports.default = Router;
});
;define('todo-app/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        redirect() {
            this.transitionTo('todo');
        }
    });
});
;define('todo-app/routes/todo', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    locationData: Ember.inject.service('location-data'),
    model() {
      const store = this.get('store');
      const locationData = this.get('locationData');
      return Ember.RSVP.hash({
        location: locationData.location,
        statistics: Ember.computed('groups', 'subgroups', 'tasks', 'location.task.state', function () {
          return {
            groups: this.groups.length,
            subgroups: this.subgroups.length,
            tasks: this.tasks.length,
            activeTasks: this.tasks.filterBy('state', 'active').length,
            completedTasks: this.tasks.filterBy('state', 'completed').length
          };
        }),
        groups: Ember.computed('location.{group.key,subgroup.key}', function () {
          return store.findAll('group');
        }),
        subgroups: Ember.computed('location.{group.key,subgroup.key}', function () {
          const currentGroupId = this.location.group.key;
          const subgroups = store.query('subgroup', { filter: {
              group: {
                id: currentGroupId
              }
            } });
          return subgroups;
        }),
        tasks: Ember.computed('location.{group.key,subgroup.key,task.key}', function () {
          const currentSubgroupId = this.location.subgroup.key;
          const tasks = store.query('task', {
            filter: {
              subgroup: {
                id: currentSubgroupId
              }
            }
          });
          return tasks;
        })
      });
    }
  });
});
;define('todo-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('todo-app/services/group', ['exports', 'todo-app/services/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    scrollDown() {
      const groupsList = document.querySelector('.groups-list-block');
      groupsList.scrollTo({
        top: groupsList.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
});
;define('todo-app/services/item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    createItem(id, name, state, params) {
      const item = {
        id,
        name,
        state
      };
      Object.assign(item, params);
      return item;
    },

    saveItem(modelName, item) {
      const store = this.get('store');
      const record = store.createRecord(modelName, item);
      return record.save();
    },

    deleteItem(modelName, id) {
      const store = this.get('store');
      const record = store.peekRecord(modelName, id);
      store.deleteRecord(record);
      return record.save();
    }
  });
});
;define('todo-app/services/location-data', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    storeItems: Ember.inject.service('store-items'),
    location: Ember.Object.create({
      group: {
        key: 'g_00000000001',
        obj: null,
        statistics: {
          amountGroups: 0
        }
      },
      subgroup: {
        key: 'sg_0000000001',
        obj: null,
        statistics: {
          amountSubgroups: 0
        }
      },
      task: {
        key: null,
        state: null,
        obj: null,
        statistics: {
          amountTasks: 0,
          amountCompletedTasks: 0,
          amountActiveTasks: 0
        }
      }
    }),

    saveLocation(groupId, subgroupId) {
      const store = this.get('store');
      if (groupId) {
        const currentGroup = store.peekRecord('group', groupId);
        this.set('location.group.key', groupId);
        this.set('location.group.obj', currentGroup);
        currentGroup.set('state', true);
      }
      if (subgroupId || subgroupId === null) {
        const currentSubgroup = subgroupId ? store.peekRecord('subgroup', subgroupId) : null;
        this.set('location.subgroup.key', subgroupId);
        this.set('location.subgroup.obj', currentSubgroup);
        if (subgroupId) currentSubgroup.set('state', true);
      }
    },

    clearLocation(type) {
      const location = this.get(`location.${type}`);
      if (location) {
        this.set(`location.${type}.key`, null);
        this.set(`location.${type}.obj`, null);
      }
    }
  });
});
;define('todo-app/services/modal-dialog', ['exports', 'todo-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function computedFromConfig(prop) {
    return Ember.computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Ember.Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: null // injected by initializer
  });
});
;define('todo-app/services/store-items', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    locationData: Ember.inject.service('location-data'),

    changeState(modelName, state) {
      const store = this.get('store');
      store.peekAll(modelName).forEach(el => {
        el.set('state', state);
        el.save();
      });
    },

    activeItem(modelName) {
      const store = this.get('store');
      const records = store.peekAll(modelName);
      return records.filterBy('state', true).length ? true : false;
    }
  });
});
;define('todo-app/services/subgroup', ['exports', 'todo-app/services/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    scrollRight() {
      const subgroupsList = document.querySelector('.scrollmenu');
      subgroupsList.scrollTo({
        left: subgroupsList.scrollWidth,
        behavior: 'smooth'
      });
    }
  });
});
;define('todo-app/services/task-state', ['exports', 'npm:javascript-state-machine'], function (exports, _npmJavascriptStateMachine) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    states: Ember.Object.extend({}).create({}),
    locationData: Ember.inject.service('location-data'),
    location: Ember.computed.alias('locationData.location'),

    addState(taskId) {
      const store = this.get('store');
      const taskRecord = store.peekRecord('task', taskId);
      const self = this;
      const state = new _npmJavascriptStateMachine.default({
        init: taskRecord.state,
        transitions: [{ name: 'taskState', from: 'active', to: 'completed' }, { name: 'taskState', from: 'completed', to: 'active' }],
        methods: {
          onTaskState() {
            taskRecord.set('state', this.state);
            taskRecord.save().then(() => {
              self.set('location.task.state', null);
              self.set('location.task.state', this.state);
            });
          }
        }
      });
      this.set(`states.${taskId}`, state);
    }
  });
});
;define('todo-app/services/task', ['exports', 'todo-app/services/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _item.default.extend({
    createItem(id, task, state, params) {
      const item = {
        id,
        task,
        state
      };
      Object.assign(item, params);
      return item;
    },

    scrollDown() {
      const groupsList = document.querySelector('.task-list-block-scroll');
      groupsList.scrollTo({
        top: groupsList.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
});
;define('todo-app/storages/stats', ['exports', 'ember-local-storage/local/object'], function (exports, _object) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Storage = _object.default.extend();

  // Uncomment if you would like to set initialState
  Storage.reopenClass({
    initialState() {
      return { groups: {} };
    }
  });

  exports.default = Storage;
});
;define("todo-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DwKNiRLV", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/application.hbs" } });
});
;define('todo-app/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define('todo-app/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("todo-app/templates/components/export-data", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IbZdDrJ7", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col-2\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-group-text checkbox-block\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"checkbox\"],[9],[0,\"\\n        \"],[7,\"label\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"type\",\"checked\",\"class\",\"aria-label\"],[\"checkbox\",[23,[\"exportCompletedTasks\"]],\"checkbox task-checkbox\",\"Checkbox for following text input\"]]],false],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"cr\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-check cr-icon glyphicon glyphicon-arrow-right\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"style\",\"display: block; margin-top: 5px\"],[9],[0,\"Export completed tasks?\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n    \"],[7,\"input\"],[11,\"class\",\"btn btn-success\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"downloadFile\",[27,\"array-items\",[[23,[\"store\"]],[23,[\"exportCompletedTasks\"]]],null],\"csv\"],null]],[11,\"value\",\"Download CSV\"],[11,\"type\",\"button\"],[9],[10],[0,\"\\n    \"],[7,\"input\"],[11,\"class\",\"btn btn-success\"],[11,\"value\",\"Download XLSX\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"downloadFile\",[27,\"array-items\",[[23,[\"store\"]],[23,[\"exportCompletedTasks\"]]],null],\"xlsx\"],null]],[11,\"type\",\"button\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/export-data.hbs" } });
});
;define("todo-app/templates/components/group-list-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OFkLeeCS", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"unless\",[[23,[\"group\",\"main\"]]],null,{\"statements\":[[0,\"  \"],[7,\"a\"],[11,\"href\",\"#\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"saveLocation\",[23,[\"group\",\"id\"]]],null]],[12,\"class\",[28,[[27,\"if\",[[23,[\"group\",\"state\"]],\"active-g\"],null]]]],[12,\"title\",[23,[\"group\",\"name\"]]],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-briefcase\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"menu\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"group\",\"name\"]],false],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"delete btn float-right delete-group-button-block\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"deleteGroup\",[23,[\"group\",\"id\"]]],null]],[9],[0,\"\\n        \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-trash delete-group-button-item\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/group-list-item.hbs" } });
});
;define("todo-app/templates/components/import-data", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "N6AtMlc7", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-group mb-3\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"custom-file\"],[9],[0,\"\\n        \"],[1,[27,\"input\",null,[[\"type\",\"accept\",\"class\",\"change\",\"id\"],[\"file\",\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .csv\",\"fileInput custom-file-input\",[27,\"action\",[[22,0,[]],\"importData\"],null],\"inputGroupFile02\"]]],false],[0,\"\\n        \"],[7,\"label\"],[11,\"class\",\"custom-file-label\"],[11,\"for\",\"inputGroupFile02\"],[9],[0,\"\\n          Choose file\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"err\",\"import\",\"fileType\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"alert alert-danger\"],[11,\"role\",\"alert\"],[9],[0,\"\\n    \"],[7,\"span\"],[9],[0,\"Import only \"],[7,\"strong\"],[9],[0,\"CSV\"],[10],[0,\" or \"],[7,\"strong\"],[9],[0,\"XLSX\"],[10],[0,\" files!\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/import-data.hbs" } });
});
;define("todo-app/templates/components/main-group-list-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IgmlXFon", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"group\",\"main\"]]],null,{\"statements\":[[0,\"  \"],[7,\"a\"],[11,\"href\",\"#\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"saveLocation\",[23,[\"group\",\"id\"]]],null]],[12,\"class\",[28,[[27,\"if\",[[23,[\"group\",\"state\"]],\"active-g\"],null]]]],[12,\"title\",[23,[\"group\",\"name\"]]],[9],[0,\"\\n    \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-briefcase\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"menu\"]]],null,{\"statements\":[[0,\"      \"],[1,[23,[\"group\",\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/main-group-list-item.hbs" } });
});
;define("todo-app/templates/components/subgroup-list-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UnlfEQ0i", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[12,\"class\",[28,[\"subgroup-item \",[27,\"if\",[[23,[\"subgroup\",\"state\"]],\"active-sg\"],null]]]],[12,\"id\",[28,[[23,[\"subgroup\",\"id\"]]]]],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"saveLocation\",[23,[\"subgroup\",\"id\"]],[23,[\"subgroup\"]]],null]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row subgroup-item-row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row subgroup-item-row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col h5 c-5f666d\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-paper-plane\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"badge badge-pill badge-light\"],[9],[1,[23,[\"subgroup\",\"name\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"progress subgroup-progress-bar\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"progress-bar bg-success\"],[11,\"role\",\"progressbar\"],[11,\"style\",\"width: 20%\"],[11,\"aria-valuenow\",\"25\"],[11,\"aria-valuemin\",\"0\"],[11,\"aria-valuemax\",\"100\"],[9],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/subgroup-list-item.hbs" } });
});
;define("todo-app/templates/components/task-list-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K9anaK5s", "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"task-item\"],[12,\"id\",[23,[\"task\",\"id\"]]],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row bg-white\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"input-group mb-3\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group-prepend\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-text checkbox-block\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"checkbox\"],[9],[0,\"\\n                  \"],[7,\"label\"],[9],[0,\"\\n                    \"],[1,[27,\"input\",null,[[\"type\",\"checked\",\"click\",\"class\",\"aria-label\"],[\"checkbox\",[27,\"compire\",[[23,[\"task\",\"state\"]],\"completed\"],null],[27,\"action\",[[22,0,[]],\"taskStateToggle\",[23,[\"task\",\"id\"]]],null],\"task-checkbox\",\"Checkbox for following text input\"]]],false],[0,\"\\n                    \"],[7,\"span\"],[11,\"class\",\"cr\"],[9],[0,\"\\n                      \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-check cr-icon glyphicon glyphicon-arrow-right\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"compire\",[[23,[\"task\",\"state\"]],\"completed\"],null]],null,{\"statements\":[[0,\"              \"],[1,[27,\"textarea\",null,[[\"class\",\"aria-label\",\"rows\",\"value\",\"input\",\"readonly\"],[\"form-control change-task-input line-through bg-white text-muted\",\"With textarea\",\"1\",[23,[\"task\",\"task\"]],[23,[\"saveList\"]],\"\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"textarea\",null,[[\"class\",\"aria-label\",\"rows\",\"value\",\"input\"],[\"form-control change-task-input\",\"With textarea\",\"1\",[23,[\"task\",\"task\"]],[23,[\"saveList\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[7,\"div\"],[11,\"class\",\"input-group-append delete-task-button-block\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"type\",\"class\",\"click\",\"value\"],[\"button\",\"btn delete-task-button\",[27,\"action\",[[22,0,[]],\"deleteTask\",[23,[\"task\",\"id\"]]],null],\"✕\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/components/task-list-item.hbs" } });
});
;define("todo-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ouHEUoG/", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/index.hbs" } });
});
;define("todo-app/templates/todo", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "M4NewfrF", "block": "{\"symbols\":[\"task\",\"subgroup\",\"group\",\"group\"],\"statements\":[[7,\"div\"],[11,\"class\",\"wrapper\"],[9],[0,\"\\n  \"],[7,\"nav\"],[11,\"id\",\"sidebar\"],[12,\"class\",[28,[[27,\"if\",[[23,[\"menu\"]],\"active\"],null]]]],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"sidebar-header\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\"Todo\"],[10],[0,\"\\n      \"],[7,\"strong\"],[9],[0,\"TD\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled components\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"card main-groups-list-block square scrollbar-pink bordered-pink thin\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n              \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"groups\"]]],null,{\"statements\":[[0,\"                  \"],[1,[27,\"main-group-list-item\",null,[[\"model\",\"group\",\"menu\"],[[23,[\"model\"]],[22,4,[]],[23,[\"menu\"]]]]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"subtract-unit\",[[23,[\"model\",\"groups\",\"length\"]],1],null]],null,{\"statements\":[[0,\"    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled components\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"card groups-list-block square scrollbar-pink bordered-pink thin\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n              \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"groups\"]]],null,{\"statements\":[[0,\"                  \"],[1,[27,\"group-list-item\",null,[[\"model\",\"group\",\"menu\"],[[23,[\"model\"]],[22,3,[]],[23,[\"menu\"]]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled CTAs\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row task-controll-panel\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n          \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"aria-label\",\"aria-describedby\",\"placeholder\",\"keyDown\"],[[23,[\"group\"]],\"form-control add-new-group-input add-new-task-input\",\"Recipient's username\",\"basic-addon2\",\"Add a group\",[27,\"action\",[[22,0,[]],\"addGroup\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled CTAs\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"article\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"deleteCompletedTask\"],null]],[9],[0,\"\\n          Delete completed tasks\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"list-unstyled CTAs\"],[9],[0,\"\\n      \"],[7,\"li\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"toggleModal\",\"import\"],null]],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"article\"],[9],[0,\"Import\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"modal\",\"open\"]]],null,{\"statements\":[[4,\"modal-dialog\",null,[[\"onClose\",\"targetAttachment\",\"translucentOverlay\"],[[27,\"action\",[[22,0,[]],\"toggleModal\",\"import\"],null],\"center\",true]],{\"statements\":[[4,\"if\",[[27,\"check-modal-type\",[[23,[\"modal\",\"open\"]],[23,[\"modal\",\"type\"]],\"import\"],null]],null,{\"statements\":[[0,\"              \"],[1,[21,\"import-data\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"check-modal-type\",[[23,[\"modal\",\"open\"]],[23,[\"modal\",\"type\"]],\"export\"],null]],null,{\"statements\":[[0,\"              \"],[1,[27,\"export-data\",null,[[\"store\"],[[23,[\"store\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[7,\"li\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"toggleModal\",\"export\"],null]],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"article\"],[9],[0,\"Export\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"article\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"log\"],null]],[9],[0,\"log\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"content\"],[12,\"class\",[28,[[27,\"unless\",[[23,[\"menu\"]],\"content-width\"],null],[27,\"if\",[[23,[\"menu\"]],\"content-width-80\"],null]]]],[9],[0,\"\\n    \"],[7,\"nav\"],[11,\"class\",\"navbar navbar-expand-lg navbar-light bg-light\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"id\",\"sidebarCollapse\"],[11,\"class\",\"btn btn-info\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"toggleMenu\"],null]],[11,\"type\",\"button\"],[9],[0,\"\\n          \"],[7,\"i\"],[11,\"class\",\"fa fa-fas fa-align-left\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n          \"],[7,\"span\"],[9],[0,\"Groups\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn btn-dark d-inline-block d-lg-none ml-auto\"],[11,\"data-toggle\",\"collapse\"],[11,\"data-target\",\"#navbarSupportedContent\"],[11,\"aria-controls\",\"navbarSupportedContent\"],[11,\"aria-expanded\",\"false\"],[11,\"aria-label\",\"Toggle navigation\"],[11,\"type\",\"button\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"collapse navbar-collapse\"],[11,\"id\",\"navbarSupportedContent\"],[9],[0,\"\\n          \"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav ml-auto\"],[9],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"nav-item active\"],[9],[0,\"\\n              \"],[7,\"a\"],[11,\"class\",\"nav-link\"],[11,\"href\",\"#\"],[9],[0,\"Page\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n              \"],[7,\"a\"],[11,\"class\",\"nav-link\"],[11,\"href\",\"#\"],[9],[0,\"Page\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n              \"],[7,\"a\"],[11,\"class\",\"nav-link\"],[11,\"href\",\"#\"],[9],[0,\"Page\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"li\"],[11,\"class\",\"nav-item\"],[9],[0,\"\\n              \"],[7,\"a\"],[11,\"class\",\"nav-link\"],[11,\"href\",\"#\"],[9],[0,\"Page\"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-12 subgroup-list-block\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"scrollmenu\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"subgroups\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"subgroup-list-item\",null,[[\"subgroup\"],[[22,2,[]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},{\"statements\":[[0,\"          \"],[7,\"span\"],[9],[0,\"no subgroups\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container-fluid p-0\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row task-conteiner\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-6 task-list-block mt-20\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"card task-list-block-scroll square scrollbar-pink bordered-pink thin\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"tasks\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"task-list-item\",null,[[\"task\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"                \"],[7,\"span\"],[9],[0,\"no tasks\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-5 options\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n              \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"\\n                  \"],[7,\"p\"],[9],[0,\"Groups: \"],[1,[23,[\"model\",\"groups\",\"length\"]],false],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"fs-20 fw-b bg-e6e6e69c pl-1 br-3\"],[9],[0,\"Group: \"],[7,\"span\"],[11,\"class\",\"badge badge-warning\"],[9],[1,[23,[\"location\",\"group\",\"obj\",\"group\"]],false],[10],[10],[0,\"\\n              \"],[7,\"ul\"],[9],[0,\"\\n                \"],[7,\"li\"],[9],[0,\"\\n                  \"],[7,\"p\"],[9],[0,\"Subgroups: \"],[1,[23,[\"model\",\"subgroups\",\"length\"]],false],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"location\",\"subgroup\",\"key\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"col\"],[9],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"fs-20 fw-b bg-e6e6e69c pl-1 br-3\"],[9],[0,\"Subgroup: \"],[7,\"span\"],[11,\"class\",\"badge badge-warning\"],[9],[1,[23,[\"location\",\"subgroup\",\"obj\",\"subgroup\"]],false],[10],[10],[0,\"\\n                \"],[7,\"ul\"],[9],[0,\"\\n                  \"],[7,\"li\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"Tasks: \"],[1,[23,[\"model\",\"tasks\",\"length\"]],false],[10],[0,\"\\n                  \"],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"Completed tasks: \"],[1,[23,[\"model\",\"statistics\",\"completedTasks\"]],false],[10],[0,\"\\n                  \"],[10],[0,\"\\n                  \"],[7,\"li\"],[9],[0,\"\\n                    \"],[7,\"p\"],[9],[0,\"Active tasks: \"],[1,[23,[\"model\",\"statistics\",\"activeTasks\"]],false],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"],[4,\"unless\",[[23,[\"location\",\"subgroup\",\"obj\",\"main\"]]],null,{\"statements\":[[0,\"                  \"],[7,\"div\"],[11,\"class\",\"delete\"],[11,\"class\",\"btn btn-danger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"deleteSubgroup\",[23,[\"location\",\"subgroup\",\"key\"]]],null]],[9],[0,\"\\n                    delete subgroup\\n                  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"nav\"],[11,\"class\",\"navbar navbar-expand-lg navbar-light bg-light controll-panel\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[9],[0,\"\\n        \"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav ml-auto w-50\"],[9],[0,\"\\n          \"],[7,\"li\"],[11,\"class\",\"nav-item active w-100\"],[9],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"aria-label\",\"aria-describedby\",\"placeholder\",\"keyDown\"],[[23,[\"subgroup\"]],\"form-control add-new-task-input\",\"Recipient's username\",\"basic-addon2\",\"Add a subgroup\",[27,\"action\",[[22,0,[]],\"addSubgroup\"],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"ul\"],[11,\"class\",\"nav navbar-nav ml-auto w-50\"],[9],[0,\"\\n          \"],[7,\"li\"],[11,\"class\",\"nav-item active w-100\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group mb-3 task-input-group-append\"],[9],[0,\"\\n              \"],[1,[27,\"input\",null,[[\"value\",\"class\",\"aria-label\",\"aria-describedby\",\"placeholder\",\"keyDown\"],[[23,[\"task\"]],\"form-control add-new-task-input\",\"Recipient's username\",\"basic-addon2\",\"Add a task\",[27,\"action\",[[22,0,[]],\"pressEnter\",[27,\"action\",[[22,0,[]],\"addTask\"],null]],null]]]],false],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group-append\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"add-new-task-btn\"],[9],[0,\"\\n                  \"],[7,\"i\"],[11,\"class\",\"fa fa-fal fa-chevron-circle-up\"],[11,\"aria-hidden\",\"true\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"addTask\"],null]],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "todo-app/templates/todo.hbs" } });
});
;

;define('todo-app/config/environment', [], function() {
  var prefix = 'todo-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("todo-app/app")["default"].create({"name":"todo-app","version":"0.0.0+9d523801"});
          }
        
//# sourceMappingURL=todo-app.map
