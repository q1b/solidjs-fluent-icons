import { splitProps } from "solid-js";
function LocationArrowLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M22.88 16.88a1.25 1.25 0 00-1.76-1.76l-5 5a1.25 1.25 0 000 1.76l5 5a1.25 1.25 0 001.76-1.76l-2.86-2.87H31a1.25 1.25 0 100-2.5H20.02l2.86-2.87zm4.03 25.83L37 32h-.04l.02-.02.02-.03A17.05 17.05 0 0041 21a17 17 0 10-30 10.95l.02.03.02.02H11l10.09 10.7a4 4 0 005.82 0zM38.5 21c0 3.58-1.3 6.85-3.44 9.38l-.31.36L25.09 41c-.59.63-1.59.63-2.18 0l-9.66-10.25-.3-.36A14.5 14.5 0 1138.5 21z"/>
    </svg>);
}
export default LocationArrowLeftIcon;
