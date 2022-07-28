import { splitProps } from "solid-js";
function TabDesktopBottomIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 17a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V13h7.5c.83 0 1.5.67 1.5 1.5V17h2.5zM11 17v-2.5a.5.5 0 00-.5-.5H3v.5A2.5 2.5 0 005.5 17H11z"/>
    </svg>);
}
export default TabDesktopBottomIcon;
