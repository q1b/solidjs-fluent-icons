import { splitProps } from "solid-js";
function CursorIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3.06a1 1 0 011.64-.77l11 9.06a1 1 0 01-.63 1.77h-5.6c-.43 0-.85.19-1.13.52L6.76 17.7A1 1 0 015 17.06v-14zm12 9.06L6 3.06v14l3.52-4.08a2.5 2.5 0 011.9-.86H17z"/>
    </svg>);
}
export default CursorIcon;
