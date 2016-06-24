'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FilterMenu = (_temp = _class = function (_React$Component) {
  _inherits(FilterMenu, _React$Component);

  function FilterMenu(props) {
    _classCallCheck(this, FilterMenu);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.setSelectedKeys = function (_ref) {
      var selectedKeys = _ref.selectedKeys;

      _this.setState({ selectedKeys: selectedKeys });
    };

    _this.handleClearFilters = function () {
      _this.setState({
        selectedKeys: []
      }, _this.handleConfirm);
    };

    _this.handleConfirm = function () {
      _this.setState({
        visible: false
      });
      _this.props.confirmFilter(_this.props.column, _this.state.selectedKeys);
    };

    _this.onVisibleChange = function (visible) {
      _this.setState({
        visible: visible
      });
      if (!visible) {
        _this.props.confirmFilter(_this.props.column, _this.state.selectedKeys);
      }
    };

    _this.handleMenuItemClick = function (info) {
      if (info.keyPath.length <= 1) {
        return;
      }
      var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
      if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
        // deselect SubMenu child
        delete keyPathOfSelectedItem[info.key];
      } else {
        // select SubMenu child
        keyPathOfSelectedItem[info.key] = info.keyPath;
      }
      _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
    };

    _this.state = {
      selectedKeys: _this.props.selectedKeys,
      keyPathOfSelectedItem: {}, // 记录所有有选中子菜单的祖先菜单
      visible: false
    };
    return _this;
  }

  FilterMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this.setState({
      selectedKeys: nextProps.selectedKeys
    });
  };

  FilterMenu.prototype.renderMenuItem = function renderMenuItem(item) {
    var column = this.props.column;

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    return _react2["default"].createElement(
      _rcMenu.Item,
      { key: item.value },
      multiple ? _react2["default"].createElement(_checkbox2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2["default"].createElement(_radio2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }),
      _react2["default"].createElement(
        'span',
        null,
        item.text
      )
    );
  };

  FilterMenu.prototype.renderMenus = function renderMenus(items) {
    var _this2 = this;

    return items.map(function (item) {
      if (item.children && item.children.length > 0) {
        var _ret = function () {
          var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

          var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
            return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = containSelected ? 'ant-dropdown-submenu-contain-selected' : '';
          return {
            v: _react2["default"].createElement(
              _rcMenu.SubMenu,
              { title: item.text, className: subMenuCls, key: item.value.toString() },
              item.children.map(function (child) {
                return _this2.renderMenuItem(child);
              })
            )
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      return _this2.renderMenuItem(item);
    });
  };

  FilterMenu.prototype.render = function render() {
    var _props = this.props;
    var column = _props.column;
    var locale = _props.locale;
    // default multiple selection in filter dropdown

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;

    var menus = _react2["default"].createElement(
      'div',
      { className: 'ant-table-filter-dropdown' },
      _react2["default"].createElement(
        _rcMenu2["default"],
        { multiple: multiple,
          onClick: this.handleMenuItemClick,
          prefixCls: 'ant-dropdown-menu',
          onSelect: this.setSelectedKeys,
          onDeselect: this.setSelectedKeys,
          selectedKeys: this.state.selectedKeys
        },
        this.renderMenus(column.filters)
      ),
      _react2["default"].createElement(
        'div',
        { className: 'ant-table-filter-dropdown-btns' },
        _react2["default"].createElement(
          'a',
          { className: 'ant-table-filter-dropdown-link confirm',
            onClick: this.handleConfirm
          },
          locale.filterConfirm
        ),
        _react2["default"].createElement(
          'a',
          { className: 'ant-table-filter-dropdown-link clear',
            onClick: this.handleClearFilters
          },
          locale.filterReset
        )
      )
    );

    var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? 'ant-table-filter-selected' : '';

    return _react2["default"].createElement(
      _dropdown2["default"],
      { trigger: ['click'],
        overlay: menus,
        visible: this.state.visible,
        onVisibleChange: this.onVisibleChange,
        closeOnSelect: false
      },
      _react2["default"].createElement(_icon2["default"], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
    );
  };

  return FilterMenu;
}(_react2["default"].Component), _class.defaultProps = {
  handleFilter: function handleFilter() {},

  column: null
}, _temp);
exports["default"] = FilterMenu;
module.exports = exports['default'];