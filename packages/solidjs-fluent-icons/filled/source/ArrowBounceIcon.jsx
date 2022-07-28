import { splitProps } from "solid-js";
function ArrowBounceIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.75 6a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0V8.56l6.47 6.47c.3.3.77.3 1.06 0l6.75-6.75a.75.75 0 00-1.06-1.06l-6.22 6.22L4.56 7.5h4.69a.75.75 0 000-1.5h-6.5z"/>
    </svg>);
}
export default ArrowBounceIcon;
