import { splitProps } from "solid-js";
function PersonSubtractIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8a9.14 9.14 0 005.13 1.2 5.48 5.48 0 010-7H5zm14 3.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-7 0c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default PersonSubtractIcon;