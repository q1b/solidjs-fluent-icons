import { splitProps } from "solid-js";
function Multiplier1xIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 6.5a.5.5 0 00-.9-.3l-.22.3c-.33.48-.7 1-1.64 1.57a.5.5 0 10.52.86A6 6 0 007 7.96v5.54a.5.5 0 101 0v-7zm2.85 3.65a.5.5 0 00-.7.7L11.29 12l-1.14 1.15a.5.5 0 00.7.7L12 12.71l1.15 1.14a.5.5 0 00.7-.7L12.71 12l1.14-1.15a.5.5 0 00-.7-.7L12 11.29l-1.15-1.14z"/>
    </svg>);
}
export default Multiplier1xIcon;
