import { splitProps } from "solid-js";
function ContractDownLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.7 8l4.15-4.15a.5.5 0 00-.7-.7L12 7.29V3.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h5a.5.5 0 000-1h-3.8zM6 4a2 2 0 00-2 2v4h4a2 2 0 012 2v4h4a2 2 0 002-2v-2.5a.5.5 0 011 0V14a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h2.5a.5.5 0 010 1H6z"/>
    </svg>);
}
export default ContractDownLeftIcon;
