import { splitProps } from "solid-js";
function BatteryCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 7.5A2.5 2.5 0 014.5 5h9A2.5 2.5 0 0116 7.5v.83h1.17a.83.83 0 01.83.84v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-2.7A5.5 5.5 0 002 9.26V7.5zm8 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 14.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z"/>
    </svg>);
}
export default BatteryCheckmarkIcon;
