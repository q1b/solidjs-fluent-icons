import { splitProps } from "solid-js";
function CommaIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 7.5a3.5 3.5 0 10-1.28 2.7 7.78 7.78 0 01-1.24 2.89A4.26 4.26 0 017.5 15a.5.5 0 000 1c1.7 0 3.22-.84 4.3-2.32 1.07-1.48 1.7-3.6 1.7-6.18z"/>
    </svg>);
}
export default CommaIcon;
