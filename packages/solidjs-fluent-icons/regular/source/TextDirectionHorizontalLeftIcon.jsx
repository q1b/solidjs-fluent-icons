import { splitProps } from "solid-js";
function TextDirectionHorizontalLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.5 3a.5.5 0 00-.47.32l-3 8a.5.5 0 00.94.36l1-2.68h3.06l1 2.68a.5.5 0 00.94-.36l-3-8A.5.5 0 0013.5 3zm0 1.92L14.65 8h-2.3l1.15-3.08zm-8.35-.77a.5.5 0 11.7.7L4.71 6H9.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 010-.7l2-2zm0 8a.5.5 0 01.7.7L4.71 14H16.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2z"/>
    </svg>);
}
export default TextDirectionHorizontalLeftIcon;
