import { splitProps } from "solid-js";
function SelectAllOnIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm10.33 2.62a.5.5 0 00-.7.05l-3.15 3.6-1.63-1.62a.5.5 0 10-.7.7l2 2a.5.5 0 00.73-.02l3.5-4a.5.5 0 00-.05-.7zM4.27 17c.34.6.99 1 1.73 1h8a4 4 0 004-4V6a2 2 0 00-1-1.73V14a3 3 0 01-3 3H4.27z"/>
    </svg>);
}
export default SelectAllOnIcon;
