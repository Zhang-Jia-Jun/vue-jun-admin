<script>
import {MenuItem} from "element-ui"
export default {
  name: "itemTitle",
  functional: true,

  render(h, context) {
    const { icon, title, hasChildren } = context.props;
    const vnodes = [];

    if (icon) {
      vnodes.push(<icon iconName={icon} />);
    }

    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }

    return h("div",icon);
  }
};
</script>
