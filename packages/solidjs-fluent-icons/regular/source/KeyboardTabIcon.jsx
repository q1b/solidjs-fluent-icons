import { splitProps } from "solid-js";
function KeyboardTabIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.35 4.15a.5.5 0 10-.7.7l4.64 4.65H3.5a.5.5 0 000 1h9.8l-4.65 4.65a.5.5 0 00.7.7l5.5-5.5a.5.5 0 000-.7l-5.5-5.5zM17 4.5a.5.5 0 00-1 0v11a.5.5 0 001 0v-11z"/>
    </svg>);
}
export default KeyboardTabIcon;
