module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "自定义插件",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {},
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      VariableDeclaration(node) {
        if (node.kind === "var") {
          context.report({
            node,
            message: "不能用var",
            fix(fixer) {
              const varToken = sourceCode.getFirstToken(node);
              return fixer.replaceText(varToken, "let");
            },
          });
        }
      },
    };
  },
};
