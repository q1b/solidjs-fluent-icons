import { splitProps } from "solid-js";
function NumberCircle1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.5v7a.5.5 0 01-1 0V8.48c-.38.48-.82.92-1.22 1.19a.5.5 0 11-.56-.84c.32-.2.71-.6 1.07-1.07.35-.47.62-.97.73-1.38a.5.5 0 01.98.12z"/>
    </svg>);
}
export default NumberCircle1Icon;
