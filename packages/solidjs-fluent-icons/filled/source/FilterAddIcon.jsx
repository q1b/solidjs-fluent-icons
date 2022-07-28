import { splitProps } from "solid-js";
function FilterAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 9.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5a.5.5 0 00-.15-.35zM9.02 5a5.57 5.57 0 00.07 1.5H3.75a.75.75 0 010-1.5h5.27zm1.46 4.25a5.5 5.5 0 002.38 1.5H5.75a.75.75 0 010-1.5h4.73zm1.77 4.25a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h4.5z"/>
    </svg>);
}
export default FilterAddIcon;
