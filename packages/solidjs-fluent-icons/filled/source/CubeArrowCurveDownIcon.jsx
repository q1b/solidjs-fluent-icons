import { splitProps } from "solid-js";
function CubeArrowCurveDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M1 5.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm6.4.9l-.9.89V5.74A2.75 2.75 0 003.75 3H3.5a.5.5 0 100 1h.25c.97 0 1.75.78 1.75 1.74V7.3l-.9-.9a.5.5 0 00-.7.7l1.75 1.76a.5.5 0 00.7 0L8.12 7.1a.5.5 0 10-.71-.7zm3.6-.9c0 .78-.17 1.53-.46 2.2l3.76-1.66a.5.5 0 01.4.91l-4.2 1.87v4.67a.5.5 0 01-1 0V9.27a5.49 5.49 0 01-7.5.46v4.08c0 .61.37 1.16.94 1.39l5.76 2.3a3.5 3.5 0 002.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 00-.94-1.39l-5.76-2.3a3.5 3.5 0 00-1.38-.25A5.47 5.47 0 0111 5.5z"/>
    </svg>);
}
export default CubeArrowCurveDownIcon;
