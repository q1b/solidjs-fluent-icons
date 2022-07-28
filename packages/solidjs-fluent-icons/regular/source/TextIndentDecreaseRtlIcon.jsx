import { splitProps } from "solid-js";
function TextIndentDecreaseRtlIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 4a.5.5 0 000 1h8a.5.5 0 000-1h-8zm-3 5a.5.5 0 000 1h11a.5.5 0 000-1h-11zM7 14.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm9.45-6.76a.5.5 0 10-.7.7L16.8 9.5l-1.06 1.06a.5.5 0 10.7.71l1.42-1.41a.5.5 0 000-.7l-1.42-1.42z"/>
    </svg>);
}
export default TextIndentDecreaseRtlIcon;
