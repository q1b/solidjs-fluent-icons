import { splitProps } from "solid-js";
function BadgeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 6a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 001-.17V15a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8.17A3 3 0 0016 7z"/>
    </svg>);
}
export default BadgeIcon;
