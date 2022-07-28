import { splitProps } from "solid-js";
function CommaIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 7.5a3.5 3.5 0 10-1.88 3.1c-.23.87-.56 1.6-.95 2.18-.8 1.16-1.83 1.72-2.92 1.72a.75.75 0 000 1.5c1.67 0 3.14-.88 4.16-2.38 1-1.49 1.59-3.58 1.59-6.12z"/>
    </svg>);
}
export default CommaIcon;
