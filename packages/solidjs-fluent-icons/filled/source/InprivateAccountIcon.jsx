import { splitProps } from "solid-js";
function InprivateAccountIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 103.12 6.5H10v-1h3.7c.14-.32.23-.65.27-1H10v-1h3.97a3.97 3.97 0 00-.26-1H10v-1h3.12A4 4 0 0010 2zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.7 0 3.28-.32 4.52-1H10v-1h5.84c.28-.3.52-.64.7-1H10v-1h6.9c.06-.32.1-.65.1-1h-7v-1h6.73A2 2 0 0015 11H5z"/>
    </svg>);
}
export default InprivateAccountIcon;
