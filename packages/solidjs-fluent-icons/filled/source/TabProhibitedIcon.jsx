import { splitProps } from "solid-js";
function TabProhibitedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1a5.46 5.46 0 00-1.5-.5V5.5a1 1 0 00-1-1h-9a1 1 0 00-1 1v9a1 1 0 001 1h3.6c.09.53.26 1.03.5 1.5H5.5A2.5 2.5 0 013 14.5v-9zm7 9a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z"/>
    </svg>);
}
export default TabProhibitedIcon;
