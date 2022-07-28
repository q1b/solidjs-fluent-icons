import { splitProps } from "solid-js";
function Battery6Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.83 6.95a.84.84 0 00-.83.83v4.33c0 .46.37.84.83.84h4.33c.47 0 .84-.38.84-.84V7.78a.84.84 0 00-.84-.83H4.83zM2 7.5A2.5 2.5 0 014.5 5h9A2.5 2.5 0 0116 7.5v.83h1.17a.83.83 0 01.83.84v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 12.5v-5z"/>
    </svg>);
}
export default Battery6Icon;
