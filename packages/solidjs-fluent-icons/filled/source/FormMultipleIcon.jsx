import { splitProps } from "solid-js";
function FormMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 11a.5.5 0 100-1 .5.5 0 000 1z"/>
  <path d="M6 3h6a3 3 0 013 3v6a2.99 2.99 0 01-3 3H6a2.99 2.99 0 01-3-3V6a3 3 0 013-3zm-.5 3a.5.5 0 000 1h7a.5.5 0 000-1h-7zm1 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3-2a.5.5 0 000 1h3a.5.5 0 000-1h-3z"/>
  <path d="M5.76 16A3 3 0 008 17h4.5a4.5 4.5 0 004.5-4.5V8a3 3 0 00-1-2.24v6.74c0 .12 0 .24-.02.36A3.5 3.5 0 0112.5 16H5.76z"/>
    </svg>);
}
export default FormMultipleIcon;
