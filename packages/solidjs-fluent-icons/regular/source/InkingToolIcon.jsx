import { splitProps } from "solid-js";
function InkingToolIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2.5a.5.5 0 00-1 0v3C2.5 6.33 3.17 7 4 7h.2l3.58 7.17c.16.33.43.57.75.71-.05.66-.03 1.31.1 1.83.1.33.23.64.45.88.23.25.54.41.92.41s.7-.16.93-.41c.22-.24.35-.55.43-.88.14-.52.17-1.17.11-1.83.32-.14.6-.39.75-.7L15.81 7H16c.83 0 1.5-.67 1.5-1.5v-3a.5.5 0 00-1 0v3a.5.5 0 01-.5.5h-.49-11H4a.5.5 0 01-.5-.5v-3zM5.3 7h9.4l-3.37 6.72a.5.5 0 01-.45.28H9.12a.5.5 0 01-.45-.28L5.31 7zm4.22 8h.96c.04.58.01 1.09-.08 1.46-.06.23-.14.38-.21.45A.23.23 0 0110 17a.23.23 0 01-.18-.09 1.09 1.09 0 01-.21-.45c-.1-.37-.13-.88-.09-1.46z"/>
    </svg>);
}
export default InkingToolIcon;
