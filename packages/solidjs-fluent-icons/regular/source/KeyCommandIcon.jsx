import { splitProps } from "solid-js";
function KeyCommandIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 4C6.33 4 7 4.67 7 5.5V7H5.5a1.5 1.5 0 110-3zM8 7V5.5A2.5 2.5 0 105.5 8H7v4H5.5A2.5 2.5 0 108 14.5V13h4v1.5a2.5 2.5 0 102.5-2.5H13V8h1.5A2.5 2.5 0 1012 5.5V7H8zm0 1h4v4H8V8zm5-1V5.5A1.5 1.5 0 1114.5 7H13zm0 6h1.5a1.5 1.5 0 11-1.5 1.5V13zm-6 0v1.5A1.5 1.5 0 115.5 13H7z"/>
    </svg>);
}
export default KeyCommandIcon;
