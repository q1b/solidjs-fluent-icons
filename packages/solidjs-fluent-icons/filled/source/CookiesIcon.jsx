import { splitProps } from "solid-js";
function CookiesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10a8 8 0 019.87-7.78.5.5 0 01.24.85 2 2 0 00.95 3.38c.26.06.44.29.44.55A2 2 0 0017 8.32a.5.5 0 01.87.24A8 8 0 112 10zm5-2a1 1 0 10-2 0 1 1 0 002 0zm3 3a1 1 0 100-2 1 1 0 000 2zm3 3a1 1 0 10-2 0 1 1 0 002 0zm-6 0a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>);
}
export default CookiesIcon;
