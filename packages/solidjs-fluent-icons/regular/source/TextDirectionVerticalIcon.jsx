import { splitProps } from "solid-js";
function TextDirectionVerticalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3.5a.5.5 0 011 0v11.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.35.15.5.5 0 01-.35-.15l-2-2a.5.5 0 01.7-.7L5 15.29V3.5zm8 9a.5.5 0 011 0v2.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L13 15.29V12.5zm.5-9.5a.5.5 0 00-.47.32l-3 8a.5.5 0 00.94.36l1-2.68h3.06l1 2.68a.5.5 0 00.94-.36l-3-8A.5.5 0 0013.5 3zm0 1.92L14.65 8h-2.3l1.15-3.08z"/>
    </svg>);
}
export default TextDirectionVerticalIcon;
