module.exports = {
  plugins: [
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      'exact',
      'Object.freeze',
    ],
  },
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
        ],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    strict: [
      'error',
      'never',
    ],
    'jsx-a11y/accessible-emoji': 'error',
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: [
          'img',
          'object',
          'area',
          'input[type="image"]',
        ],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    'jsx-a11y/anchor-has-content': [
      'error',
      {
        components: [],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDom: false,
      },
    ],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: [
          'label',
        ],
        controlComponents: [],
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],
    'jsx-a11y/heading-has-content': [
      'error',
      {
        components: [
          '',
        ],
      },
    ],
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    'jsx-a11y/label-has-for': [
      'off',
      {
        components: [],
        required: {
          every: [
            'nesting',
            'id',
          ],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': [
      'error',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: [
          'marquee',
          'blink',
        ],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: [
          'none',
          'presentation',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: [
          'menuitem',
          'option',
          'row',
          'tab',
          'treeitem',
        ],
        table: [
          'grid',
        ],
        td: [
          'gridcell',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: [
          'tabpanel',
        ],
      },
    ],
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: [
          'bool',
          'mutuallyExclusiveTrueProps',
        ],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: false,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
    ],
    'react/display-name': [
      'off',
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-component-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-dom-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-elements': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true,
      },
    ],
    'react/forbid-prop-types': [
      'error',
      {
        forbid: [
          'any',
          'array',
          'object',
        ],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-boolean-value': [
      'error',
      'never',
      {
        always: [],
      },
    ],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.jsx',
        ],
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-fragments': [
      'error',
      'syntax',
    ],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-key': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-literals': [
      'off',
      {
        noStrings: true,
      },
    ],
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
      },
    ],
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        exceptions: [],
      },
    ],
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-prop-types': 'off',
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-space-before-closing': [
      'off',
      'always',
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-react': [
      'error',
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': [
      'error',
    ],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'off',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'off',
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': [
      'error',
      'always',
    ],
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/require-optimization': [
      'off',
      {
        allowDecorators: [],
      },
    ],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: [
            '/^render.+$/',
            'render',
          ],
        },
      },
    ],
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/state-in-constructor': [
      'error',
      'always',
    ],
    'react/static-property-placement': [
      'error',
      'property assignment',
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
}
