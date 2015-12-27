export default {
  wrapInScriptTags(scriptBody) {
    if (!scriptBody) {
      return '';
    }

    return `\n<script>${scriptBody}\n</script>`;
  },
};
