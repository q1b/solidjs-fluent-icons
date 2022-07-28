import { splitProps } from "solid-js";
function FilterAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 9.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5a.5.5 0 00-.15-.35zM9.02 5H3.41a.5.5 0 00.09 1h5.52a5.57 5.57 0 010-1zm1.24 4H5.4a.5.5 0 00.09 1h5.84c-.4-.28-.77-.62-1.08-1zM7.4 13h5.09a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1z"/>
    </svg>);
}
export default FilterAddIcon;
