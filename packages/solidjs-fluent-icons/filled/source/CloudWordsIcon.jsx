import { splitProps } from "solid-js";
function CloudWordsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 002 11.62 3.33 3.33 0 005.28 15h9.44A3.33 3.33 0 0018 11.62a3.33 3.33 0 00-3.28-3.37h-.07zM8.5 7h3a.5.5 0 010 1h-3a.5.5 0 010-1zM4 11.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm7.5-.5h4a.5.5 0 010 1h-4a.5.5 0 010-1z"/>
    </svg>);
}
export default CloudWordsIcon;
