import { splitProps } from "solid-js";
function OrganizationIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 5a3 3 0 113.5 2.96V9.5h3c.83 0 1.5.67 1.5 1.5v1.04a3 3 0 11-1 0V11a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5v1.04a3 3 0 11-1 0V11c0-.83.67-1.5 1.5-1.5h3V7.96A3 3 0 017 5z"/>
    </svg>);
}
export default OrganizationIcon;
