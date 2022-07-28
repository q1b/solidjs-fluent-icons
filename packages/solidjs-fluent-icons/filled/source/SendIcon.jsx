import { splitProps } from "solid-js";
function SendIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.72 2.05l15.36 7.57a.5.5 0 010 .9L2.72 18.07a.5.5 0 01-.7-.58l1.52-5.74a.5.5 0 01.4-.37l6.88-1.14a.25.25 0 00.19-.15l.02-.06a.25.25 0 00-.15-.27l-.06-.02L3.9 8.6a.5.5 0 01-.4-.37l-1.48-5.6a.5.5 0 01.7-.58z"/>
    </svg>);
}
export default SendIcon;
