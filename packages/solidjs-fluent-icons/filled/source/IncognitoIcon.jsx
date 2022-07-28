import { splitProps } from "solid-js";
function IncognitoIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.08 8.75a34.9 34.9 0 0111.86 0l1.48.24a.5.5 0 10.16-.98l-1.13-.19a1.42 1.42 0 00-.08-.22l-1.65-3.7a1.5 1.5 0 00-1.37-.9h-6.7c-.6 0-1.13.35-1.37.9L3.63 7.6l-.09.23L2.42 8a.5.5 0 00.16.98 90.9 90.9 0 011.5-.24zM3 13.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zM5.5 10a3.5 3.5 0 103.46 4h2.08a3.5 3.5 0 100-1H8.96a3.5 3.5 0 00-3.46-3zm6.5 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"/>
    </svg>);
}
export default IncognitoIcon;
